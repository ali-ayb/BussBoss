<?php

namespace App\Http\Controllers;

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

        $trips = Trip::where('driver_id', '=', $driver_id)
            ->where('status', '=', 'ongoing')
            ->where('is_deleted', '=', 0)
            ->select('trips.departure_time', 'trips.arrival_time', 'trips.source', 'trips.destination', 'trips.price')
            ->get();

        return response()->json([
            "trips" => $trips,
        ]);
    }
}
