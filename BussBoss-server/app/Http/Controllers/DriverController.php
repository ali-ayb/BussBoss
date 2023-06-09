<?php

namespace App\Http\Controllers;

use App\Models\Drivers_info;
use App\Models\Location;
use App\Models\Trip;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DriverController extends Controller
{
    public function getAllDrivers()
    {
        $drivers = User::where('user_type', 'driver')->join('drivers_info', 'users.id', '=', 'drivers_info.driver_id')
            ->get();

        return response()->json([
            'drivers' => $drivers
        ]);
    }

    public function getDriverFullName()
    {
        $user = Auth::user();
        $first_name = $user->first_name;
        $last_name = $user->last_name;
        return response()->json([
            'first_name' => $first_name,
            'last_name' => $last_name,
        ]);
    }

    public function getDriverTotalTrips()
    {
        $driver_id = Auth::id();
        $total_driver_trips = Trip::where('driver_id', '=', $driver_id)->count();

        Drivers_info::where('driver_id', $driver_id)
            ->update(['total_trips' => $total_driver_trips]);

        return response()->json([
            'total_driver_trips' => $total_driver_trips,
        ]);
    }

    public function getDriverTotalEarned()
    {
        $driver_id = Auth::id();
        $total_driver_earned = Trip::where('driver_id', '=', $driver_id)
            ->sum(Trip::raw('price * passenger_number'));

        return response()->json([
            'total_driver_earned' => $total_driver_earned,
        ]);
    }

    public function getDriversFromDestination(Request $request)
    {
        $destination = $request->destination;

        if (empty($destination)) {
            return response()->json([
                'drivers' => []
            ]);
        }

        $drivers = Trip::where('destination', 'LIKE', $destination . '%')
            ->join('drivers_info', 'trips.driver_id', '=', 'drivers_info.driver_id')
            ->join('users', 'trips.driver_id', '=', 'users.id')
            ->select('drivers_info.driver_id', 'trips.departure_time', 'trips.source', 'drivers_info.profile_image', 'drivers_info.rating', 'users.first_name', 'users.last_name')
            ->get();

        return response()->json([
            'drivers' => $drivers
        ]);
    }

    public function approveDriver(Request $request)
    {
        $driver_id = $request->id;

        $action = Drivers_info::where('driver_id', $driver_id)
            ->update(['is_approved' => '1']);

        return response()->json([
            'status' => $action,
        ]);
    }

    public function addLocation(Request $request)
    {
        $driver_id = Auth::id();
        $latitude = $request->latitude;
        $longitude = $request->longitude;

        $location = Location::where('driver_id', $driver_id)->first();

        if ($location) {
            $location->latitude = $latitude;
            $location->longitude = $longitude;
            $location->save();
        } else {
            $location = new Location();
            $location->driver_id = $driver_id;
            $location->latitude = $latitude;
            $location->longitude = $longitude;
            $location->save();
        }


        return response()->json([
            'status' => $location,
        ]);
    }

    public function getDriverLocation(Request $request)
    {
        $driver_id =  $request->driver_id;

        $location = Location::where('driver_id', $driver_id)->first();
        return response()->json([
            'status' => $location,
        ]);
    }
}
