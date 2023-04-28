<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Trip extends Model
{
    use HasFactory;
    protected $fillable = [
        'departure_time',
        'arrival_time',
        'bus_number',
        'source',
        'destination',
        'seats_available',
        'min_passengers',
        'driver_id',
    ];

    // public function Drivers_info(): BelongsTo
    // {
    //     return $this->belongsTo(Drivers_info::class, 'driver_id');
    // }
}
