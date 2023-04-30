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

    public function getPassengerCurrentReservations()
    {
        $passenger_id = Auth::id();

        $currentReservation  = Reservation::join('trips', 'reservations.trip_id', '=', 'trips.id')
            ->where('reservations.passenger_id', $passenger_id)
            ->where('reservations.status', 'ongoing')
            ->select('reservations.*', 'trips.source', 'trips.destination', 'trips.departure_time', 'trips.arrival_time', 'trips.bus_number')
            ->get();

        return response()->json([
            "currentReservation" => $currentReservation,
        ]);
    }
}
