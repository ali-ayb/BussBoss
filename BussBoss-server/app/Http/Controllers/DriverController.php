<?php

namespace App\Http\Controllers;

use App\Models\Trip;
use App\Models\User;
use Illuminate\Http\Request;

class DriverController extends Controller
{
    public function getAllDrivers()
    {
        $drivers = User::join('drivers_info', 'users.id', '=', 'drivers_info.driver_id')
            ->get();

        return response()->json([
            'drivers' => $drivers
        ]);
    }

    public function getDriversFromDestination(Request $request)
    {
        $destination = $request->destination;

        $drivers = Trip::join('drivers_info', 'trips.driver_id', '=', 'drivers_info.driver_id')
            ->join('users', 'trips.driver_id', '=', 'users.id')
            ->select('trips.departure_time', 'trips.source', 'drivers_info.profile_image', 'drivers_info.rating', 'users.first_name', 'users.last_name')
            ->get();

        return response()->json([
            'drivers' => $drivers
        ]);
    }
}
