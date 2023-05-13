<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Passenger_info extends Model
{
    use HasFactory;

    protected $table = 'passengers_info';

    protected $fillable = [
        'passenger_id',
        'total_trips',
        'total_paid',
    ];
}
