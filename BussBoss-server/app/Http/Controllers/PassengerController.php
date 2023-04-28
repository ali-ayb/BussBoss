<?php

namespace App\Http\Controllers;

use App\Models\Passenger_info;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PassengerController extends Controller
{
    public function getPassengerFullName()
    {
        $user = Auth::user();
        $first_name = $user->first_name;
        $last_name = $user->last_name;
        return response()->json([
            'first_name ' => $first_name,
            'last_name ' => $last_name,
        ]);
    }

    public function getTotalTrips()
    {
        $user = Auth::user();
        $passenger = Passenger_info::where('passenger_id', $user->id)->first();
        $total_trips = $passenger->total_trips;
        return response()->json([
            'total-trips ' => $total_trips,
        ]);
    }
}
