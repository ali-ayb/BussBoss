<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Drivers_info extends Model
{
    use HasFactory;
    protected $table = 'drivers_info';

    protected $fillable = [
        'driver_id',
        'license_number',
        'profile_image',
        'rating',
        'isapproved',
    ];
}
