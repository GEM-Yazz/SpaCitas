<?php

namespace App\Controllers;

use App\Models\Example;
use App\Models\Cita;
use Exception;

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception as MailerException;

require(__DIR__ . '/../../libs/email.php');

class ExampleController {
    public function __construct() { }

    public function index($request) {
        $examples = Example::all();

        if (count($examples)) {
            return $examples;
        } else {
            throw new Exception('No examples found');
        }
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
            $mail->Subject = '¡Gracias por tu reserva !';
            $mail->MsgHTML($body);

            $mail->send();

            return true;
        } catch (Exception $e) {
            return false;
        }
    }
}
