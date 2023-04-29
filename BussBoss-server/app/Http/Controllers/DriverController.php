<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class DriverController extends Controller
{
    public function getAllDrivers()
    {
        $users = User::join('drivers_info', 'users.id', '=', 'drivers_info.driver_id')
            ->get();

        return response()->json([
            'drivers' => $users
        ]);
    }
}
