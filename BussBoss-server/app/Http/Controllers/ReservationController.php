<?php

namespace App\Http\Controllers;

use App\Models\Drivers_info;
use App\Models\DriverRating;
use App\Models\Reservation;
use App\Models\Trip;
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

        Trip::where('id', $trip_id)
            ->increment('passenger_number');

        return response()->json([
            'reservation' => $reservation,
            'status' => true
        ]);
    }

    public function finishReservation(Request $request)
    {
        $reservation_id = $request->reservation_id;
        $passenger_id = Auth::id();

        $action = Reservation::where('id', $reservation_id)
            ->where('passenger_id', $passenger_id)
            ->update(['status' => 'finished']);


        return response()->json([
            "result" => $action,
            'id' => $reservation_id
        ]);
    }

    public function addRating(Request $request)
    {
        $rating = $request->rating;
        $driver_id = $request->driver_id;

        $reservation = DriverRating::create(
            [
                'driver_id' => $driver_id,
                'rating' => $rating
            ]
        );

        $ratings = DriverRating::where('driver_id', $driver_id)->get();

        $average_rating = $ratings->avg('rating');

        $action = Drivers_info::where('driver_id', $driver_id)
            ->update(['rating' => $average_rating]);

        return response()->json([
            "result" => $action,
        ]);
    }

    public function cancelReservation(Request $request)
    {
        $reservation_id = $request->reservation_id;
        $passenger_id = Auth::id();

        $action = Reservation::where('id', $reservation_id)
            ->where('passenger_id', $passenger_id)
            ->update(['status' => 'canceled']);


        return response()->json([
            "result" => $action,
        ]);
    }

    public function getPassengerCurrentReservations()
    {
        $passenger_id = Auth::id();

        $currentReservation  = Reservation::join('trips', 'reservations.trip_id', '=', 'trips.id')
            ->join('users', 'trips.driver_id', '=', 'users.id')
            ->where('reservations.passenger_id', $passenger_id)
            ->where('reservations.status', 'ongoing')
            ->select('reservations.*', 'trips.driver_id', 'trips.source', 'trips.destination', 'trips.departure_time', 'trips.arrival_time', 'trips.bus_number', 'users.first_name', 'users.last_name')
            ->get();

        return response()->json([
            "currentReservation" => $currentReservation,
        ]);
    }
}
