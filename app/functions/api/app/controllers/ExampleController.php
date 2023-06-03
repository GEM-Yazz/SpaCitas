<?php

namespace App\Controllers;

use App\Models\Example;
use App\Models\Cita;
use Exception;

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception as MailerException;

use Google_Client;
use Google_Service_Calendar;
use Google_Service_Calendar_Event;

use App\Models\UserCalendar;

require(__DIR__ . '/../../libs/email.php');

class ExampleController {
    public function __construct() { }

    public function index($request) {
        $users = get_users([
            'meta_query' => [
                [
                    'key'       => 'sucursal',
                    'value'     => 'PlazaLasPergolas',
                    'compare'   => '='
                ]
            ]
        ]);
        $userIdFromSucursal = $users[0]->ID;

        return $userIdFromSucursal;
    }

    public function storeCitas($request){
        $cita = new Cita();

        $cita->nombre       = $request['nombre'];
        $cita->apellidos    = $request['apellidos'];
        $cita->telefono     = $request['telefono'];
        $cita->servicio     = $request['servicio'];
        $cita->sucursal     = $request['sucursal'];
        $cita->email        = $request['email'];
        $cita->reserva      = $request['reserva'];
        $cita->hora         = $request['hora'];

        $cita->save();

        if ($cita) {
            $this->__sendNotify($cita);
            $this->createEvent($cita);
        }

        return $cita;
    }

    public function showHoursByDay($request){
        $services = get_posts([
            'name'       =>  $request ['services'],
            'post_type'  => 'services'
        ]);

        if(count($services)>0) {
            $service    = $services[0];
            $day        = $request['day'];
            $dayDate    = $request['day_date'];

            $hours = get_field($day, $service->ID);
            $hoursFinal = [];

            foreach($hours as $hour) {
                $cita = Cita::where([
                    'servicio'  => $service->post_title,
                    'hora'      => $hour['hora'],
                    'reserva'   => $dayDate,
                ])->first();

                if (!$cita) {
                    array_push($hoursFinal, $hour);
                }
            }

            return $hoursFinal;
        } else { 
            return false; 
        }
    }

    private function __sendNotify($cita) {
        $mail = new PHPMailer(true);

        try {
            $mail->isSMTP();

            $mail->CharSet      = 'UTF-8';
            $mail->SMTPDebug    = 0;
            $mail->Host         = $_ENV['MAIL_HOST'];
            $mail->SMTPAuth     = true;
            $mail->Username     = $_ENV['MAIL_USER'];
            $mail->Password     = $_ENV['MAIL_PASSWORD'];
            $mail->SMTPSecure   = $_ENV['MAIL_ENCRYPTATION'];
            $mail->Port         = 465;

            $mail->setFrom($_ENV['MAIL_SENDER'], "Caricia SPA");
            $mail->addAddress($cita->email);

            $body = __getEmailTemplate('cita', $cita);

            $mail->isHTML(true); 
            $mail->Subject = 'Caricia Spa ¡Reserva exitosa!';
            $mail->MsgHTML($body);

            $mail->send();

            return true;
        } catch (Exception $e) {
            return false;
        }
    }

    public function authGoogle($request) {
        $authGoogleLink = sprintf(
            'https://accounts.google.com/o/oauth2/auth?scope=%s&redirect_uri=%s&response_type=code&client_id=%s&access_type=online',
            urlencode ($_ENV['GOOGLE_OAUTH_SCOPE']),
            $_ENV['GOOGLE_CALENDAR_REDIRECT_URI'],
            $_ENV['GOOGLE_CLIENT_ID']
        );

        return (object)[
            'message' => 'Google auth link generated',
            'data'    => $authGoogleLink,
            'status'  => true,
            'code'    => 200
        ];
    }

    public function createEvent($cita) {
        try {
            $googleClient = self::__getGoogleClient($cita->sucursal);

            $calendarService = new Google_Service_Calendar($googleClient);
            $calendarId = 'primary';
            $hourCita = date("H:i:s", strtotime($cita->hora));
            $fechaReservaCita = $cita->reserva.'T'.$hourCita;

            $event = new Google_Service_Calendar_Event(array(
                'summary' => 'Caricia Spa Rervaciónn: '.$cita->nombre.' '.$cita->apellidos,
                //'location' => 'SUCURSAL',
                'description' => "<p><strong>Nombre: </strong>". $cita->nombre . ' '. $cita->apellidos .
                "<p><strong>Teléfono: </strong> ". $cita->telefono ."</p>".
                "<p><strong>Servicio: </strong> ". $cita->servicio ."</p>".
                "<p><strong>Hora: </strong> ". $cita->hora ."</p>",
                'start' => array(
                    'dateTime' => $fechaReservaCita,
                    'timeZone' => 'America/Mexico_City',
                ),
                'end' => array(
                    'dateTime' => $fechaReservaCita,
                    'timeZone' => 'America/Mexico_City',
                ),
                'recurrence' => array(
                    'RRULE:FREQ=DAILY;COUNT=1'
                ),
                'reminders' => array(
                    'useDefault' => FALSE,
                    'overrides' => array(
                        array('method' => 'email', 'minutes' => 24 * 60),
                        array('method' => 'popup', 'minutes' => 10),
                    ),
                ),
            ));

            $event->setAttendees([
                ['email' => $cita->email],
            ]);

            $event = $calendarService->events->insert($calendarId, $event, ['sendUpdates' => 'all']);

            return (object)[
                'message'   => 'Evente created!',
                'data'      => $event,
                'status'    => true,
                'code'      => 200
            ];
        } catch (Exception $e) {
            throw new Exception($e->getMessage());
        }
    }

    public function storeGoogleToken($request) {
        $client = new Google_Client();
        $client->setApplicationName('CitasSpa');
        $client->setScopes(Google_Service_Calendar::CALENDAR);
        $client->setAuthConfig(__DIR__ . '/../../assets/auth/credentials.json');
        $client->setAccessType('offline');

        $accessToken = $client->fetchAccessTokenWithAuthCode($request['code']);
        
        if (array_key_exists('error', $accessToken)) {
            throw new Exception(join(', ', $accessToken));
        }

        $userCalendar = $this->__storeAccesToken(intval($request['user_id']), $accessToken['access_token']);

        if ($userCalendar) return true;
        else return false;
    }

    private function __getGoogleClient($sucursal) {
        $client = new Google_Client();
        $client->setApplicationName('CitasSpa');
        $client->setScopes(Google_Service_Calendar::CALENDAR);
        $client->setAuthConfig(__DIR__ . '/../../assets/auth/credentials.json');
        $client->setAccessType('offline');
        $client->setRedirectUri($_ENV['GOOGLE_CALENDAR_REDIRECT_URI']);
        $client->setApprovalPrompt('force');

        // Buscar el usuario en wp_users, que tenga la sucursal de la cita
        $users = get_users([
            'meta_query' => [
                [
                    'key'       => 'sucursal',
                    'value'     => $sucursal,
                    'compare'   => '='
                ]
            ]
        ]);
        $userIdFromSucursal = $users[0]->ID;

        $userCalendar = UserCalendar::where('user_id', $userIdFromSucursal)
            ->orderBy('id','desc')
            ->first();

        $accessToken = $userCalendar->code;

        $client->setAccessToken($accessToken);

        if ($client->isAccessTokenExpired()) {
            $refreshTokenSaved = $client->getRefreshToken();

            $client->fetchAccessTokenWithRefreshToken($refreshTokenSaved);

            $newAccessToken = $client->getAccessToken();

            $client->setAccessToken($newAccessToken);

            $this->__storeAccesToken($userCalendar->user_id, $newAccessToken['access_token']);
        }

        return $client;
    }

    private function __storeAccesToken(int $userId, string $accessToken) {
        $userCalendar = new UserCalendar();

        $userCalendar->user_id  = $userId;
        $userCalendar->code     = $accessToken;

        $userCalendar->save();

        return $userCalendar;
    }
}
