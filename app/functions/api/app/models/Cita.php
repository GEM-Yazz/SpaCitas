<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Cita extends Model {
    protected $table    = 'wp_citas';
    protected $fillable = [
        'nombre',
        'apellidos',
        'telefono',
        'servicio',
        'sucursal',
        'email',
        'reserva',
        'hora',
    ];
}
