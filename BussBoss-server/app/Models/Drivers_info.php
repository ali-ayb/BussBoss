<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

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

    public function Trip(): HasMany
    {
        return $this->hasMany(Trip::class);
    }
}
