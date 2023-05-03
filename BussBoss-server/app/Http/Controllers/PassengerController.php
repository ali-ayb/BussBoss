<?php

namespace App\Http\Controllers;

use App\Models\Passenger_info;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use function PHPUnit\Framework\returnSelf;

class PassengerController extends Controller
{
    public function getAllPassengers()
    {
        $users = User::where('user_type', 'passenger')->join('passengers_info', 'users.id', '=', 'passengers_info.passenger_id')
            ->get();

        return response()->json([
            'passengers' => $users
        ]);
    }

    public function getPassengerFullName()
    {
        $user = Auth::user();
        $first_name = $user->first_name;
        $last_name = $user->last_name;
        return response()->json([
            'first_name' => $first_name,
            'last_name' => $last_name,
        ]);
    }

    public function getPassengerTotalTrips()
    {
        $user = Auth::id();
        $passenger = Passenger_info::where('passenger_id', $user)->first();
        $total_trips = $passenger->total_trips;
        return response()->json([
            'total_trips ' => $total_trips,
        ]);
    }

    public function getPassengerTotalPaid()
    {
        $user = Auth::id();
        $passenger = Passenger_info::where('passenger_id', $user)->first();
        $total_paid = $passenger->total_paid;
        return response()->json([
            'total_paid ' => $total_paid,
        ]);
    }
}
