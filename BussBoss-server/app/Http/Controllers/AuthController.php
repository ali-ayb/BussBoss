<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use App\Http\Controllers\ServicesController;
use App\Models\Drivers_info;
use App\Models\Passenger_info;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\Storage;

class AuthController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);
        $credentials = $request->only('email', 'password');

        $token = Auth::attempt($credentials);
        if (!$token) {
            return response()->json([
                'status' => 'error',
                'message' => 'Unauthorized',
            ], 401);
        }

        $user = Auth::user();
        return response()->json([
            'status' => 'success',
            'user' => $user,
            'authorisation' => [
                'token' => $token,
                'type' => 'bearer',
            ]
        ]);
    }

    public function register(Request $request)
    {

        $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6',
        ]);


        $user = User::create([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'email' => $request->email,
            'phone' => $request->phone,
            'user_type' => $request->user_type ?? 'passenger',
            'password' => Hash::make($request->password),
        ]);

        if ($request->user_type == 'passenger') {
            Passenger_info::create([
                'passenger_id' => $user->id,
                'total_trips' => $request->total_trips,
                'total_paid' => $request->total_paid,
            ]);
        }

        if ($request->user_type == 'driver') {
            $user->profile_image = $request->profile_image ? $request->profile_image : "NA";

            $image_data = base64_decode(preg_replace('#^data:image/\w+;base64,#i', '', $user->profile_image));
            $filename = uniqid() . '.png';
            $user->profile_image = $filename;
            Storage::disk('public')->put('images/' . $filename, $image_data);
            $driver_info = Drivers_info::create([
                'driver_id' => $user->id,
                'license_number' => $request->license_number,
                'profile_image' => $user->profile_image,
                'rating' => $request->rating,
                'is_approved' => $request->is_approved ?? 0,
            ]);
        }

        $token = Auth::login($user);
        return response()->json([
            'status' => 'success',
            'message' => 'User created successfully',
            'user' => $user,
            'authorisation' => [
                'token' => $token,
                'type' => 'bearer',
            ]
        ]);
    }

    public function logout()
    {
        Auth::logout();
        return response()->json([
            'status' => 'success',
            'message' => 'Successfully logged out',
        ]);
    }

    public function refresh()
    {
        return response()->json([
            'status' => 'success',
            'user' => Auth::user(),
            'authorisation' => [
                'token' => Auth::refresh(),
                'type' => 'bearer',
            ]
        ]);
    }
}
