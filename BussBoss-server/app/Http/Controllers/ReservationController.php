<?php

namespace App\Http\Controllers;

use App\Models\Reservation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ReservationController extends Controller
{
    public function reserveTrip(Request $request)
    {
        $passenger_id = Auth::id();
        $trip_id = $request->trip_id;

        $reservation = Reservation::create(
            [
                'trip_id' => $trip_id,
                'passenger_id' => $passenger_id
            ]
        );

        return response()->json([
            'reservation' => $reservation
        ]);
    }
}
