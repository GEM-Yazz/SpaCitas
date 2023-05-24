<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserCalendar extends Model {
    protected $table    = 'wp_user_calendars';
    protected $fillable = [
        'user_id',
        'code',
    ];
}
