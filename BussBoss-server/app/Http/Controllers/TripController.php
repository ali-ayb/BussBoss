<?php

namespace App\Http\Controllers;

use App\Models\Trip;
use Illuminate\Support\Facades\Auth;

use Illuminate\Http\Request;

class TripController extends Controller
{

    public function addTrip(Request $request)
    {
        $user = Auth::user();
        Trip::create([
            'departure_time' => $request->departure_time,
            'arrival_time' => $request->arrival_time,
            'bus_number' => $request->bus_number,
            'source' => $request->source,
            'destination' => $request->destination,
            'seats_available' => $request->seats_available,
            'min_passengers' => $request->min_passengers,
            'driver_id' => $user->id
        ]);
        return response()->json([
            "status" => 'trip created successfully',
        ]);
    }
}
