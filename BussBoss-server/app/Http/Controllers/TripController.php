<?php

namespace App\Http\Controllers;

use App\Models\Reservation;
use App\Models\Trip;
use Illuminate\Support\Facades\Auth;

use Illuminate\Http\Request;

class TripController extends Controller
{

    public function addTrip(Request $request)
    {
        $user = Auth::id();
        Trip::create([
            'departure_time' => $request->departure_time,
            'arrival_time' => $request->arrival_time,
            'bus_number' => $request->bus_number,
            'source' => $request->source,
            'destination' => $request->destination,
            'seats_available' => $request->seats_available,
            'min_passengers' => $request->min_passengers,
            'driver_id' => $user
        ]);
        return response()->json([
            "status" => 'trip created successfully',
        ]);
    }

    public function getTripsFromDriverId(Request $request)
    {
        $driver_id = $request->driver_id;

        $trips = Trip::select('trips.id', 'trips.departure_time', 'trips.arrival_time', 'trips.source', 'trips.destination', 'trips.price')
            ->where('driver_id', '=', $driver_id)
            ->where('status', '=', 'ongoing')
            ->where('is_deleted', '=', 0)
            ->get();

        return response()->json([
            "trips" => $trips,
        ]);
    }

    public function getPassengerFinishedTrips()
    {
        $passenger_id = Auth::id();

        $trips  = Reservation::join('trips', 'reservations.trip_id', '=', 'trips.id')
            ->join('users', 'trips.driver_id', '=', 'users.id')
            ->where('reservations.passenger_id', $passenger_id)
            ->where('reservations.status', 'finished')
            ->select('reservations.*', 'trips.source', 'trips.destination', 'trips.departure_time', 'trips.arrival_time', 'trips.bus_number', 'users.first_name', 'users.last_name')
            ->get();

        return response()->json([
            "trips" => $trips,
        ]);
    }
}
