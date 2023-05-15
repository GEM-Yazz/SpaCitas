<?php

namespace App\Controllers;

use App\Models\Example;
use App\Models\Cita;
use Exception;

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
        $cita = new cita ();
        
        $cita->nombre = $request['nombre'];
        $cita->apellidos = $request['apellidos'];
        $cita->telefono = $request['telefono'];
        $cita->servicio = $request['servicio'];
        $cita->sucursal = $request['sucursal'];
        $cita->email = $request['email'];
        $cita->reserva = $request['reserva'];
        $cita->hora = $request['hora'];

        $cita->save();

        return $cita;

    }

    public function showHoursByDay($request){
        $service = get_posts([
           'name' =>  $request ['services'],
           'post_type' => 'services'
        ]);

        if(count($service)>0) {
            $services    = $service [0];
            $day         = $request['day'];
  
          return get_field($day, $services->ID);
        } else { 
            return false; 
        }
    }

}
