<?php

namespace App\Http\Controllers;

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
}
