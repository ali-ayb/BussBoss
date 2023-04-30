<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\DriverController;
use App\Http\Controllers\PassengerController;
use App\Http\Controllers\ReservationController;
use App\Http\Controllers\TripController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::post('/register', [AuthController::class, "register"]);
Route::post('/login', [AuthController::class, "login"]);

Route::post('/reserve_trip', [ReservationController::class, "reserveTrip"]);
Route::get('/get_passenger_current_reservations', [ReservationController::class, "getPassengerCurrentReservations"]);


Route::get('/get_passenger_finished_trips', [TripController::class, "getPassengerFinishedTrips"]);


Route::get('/get_all_Passengers', [PassengerController::class, "getAllPassengers"]);
Route::get('/get_all_drivers', [DriverController::class, "getAllDrivers"]);
Route::get('/get_drivers_from_destination', [DriverController::class, "getDriversFromDestination"]);
Route::get('/get_trips_from_driver_id', [TripController::class, "getTripsFromDriverId"]);

Route::group(['middleware' => 'bussboss_authenticate'], function () {

    Route::get('/get_passenger_full_name', [PassengerController::class, "getPassengerFullName"]);
    Route::post('/add_trip', [TripController::class, "addTrip"]);
    Route::get('/get_all_trips', [PassengerController::class, "getTotalTrips"]);
    Route::get('/get_total_paid', [PassengerController::class, "getTotalPaid"]);
});
