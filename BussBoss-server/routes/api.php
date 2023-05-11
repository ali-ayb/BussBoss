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
Route::post('/logout', [AuthController::class, "logout"]);


Route::get('/get_all_Passengers', [PassengerController::class, "getAllPassengers"]);
Route::get('/get_all_drivers', [DriverController::class, "getAllDrivers"]);

Route::group(['middleware' => 'bussboss_authenticate'], function () {

    Route::post('/reserve_trip', [ReservationController::class, "reserveTrip"]);
    Route::get('/get_passenger_full_name', [PassengerController::class, "getPassengerFullName"]);
    Route::get('/get_passenger_current_reservations', [ReservationController::class, "getPassengerCurrentReservations"]);
    Route::get('/get_passenger_finished_trips', [TripController::class, "getPassengerFinishedTrips"]);
    Route::post('/get_drivers_from_destination', [DriverController::class, "getDriversFromDestination"]);
    Route::get('/get_trips_from_driver_id', [TripController::class, "getTripsFromDriverId"]);
    Route::get('/get_Passenger_total_paid', [PassengerController::class, "getPassengerTotalPaid"]);
    Route::get('/get_passenger_total_trips', [PassengerController::class, "getPassengerTotalTrips"]);
    Route::post('/finish_reservation', [ReservationController::class, "finishReservation"]);
    Route::post('/cancel_reservation', [ReservationController::class, "cancelReservation"]);
    Route::post('/add_rating', [ReservationController::class, "addRating"]);
    Route::post('/get_driver_location', [DriverController::class, "getDriverLocation"]);

    Route::group(['middleware' => 'driver_authorize'], function () {
        Route::get('/get_driver_total_trips', [DriverController::class, "getDriverTotalTrips"]);
        Route::get('/get_driver_total_earned', [DriverController::class, "getDriverTotalEarned"]);
        Route::get('/get_driver_full_name', [DriverController::class, "getDriverFullName"]);
        Route::post('/add_trip', [TripController::class, "addTrip"]);
        Route::get('/get_driver_finished_trips', [TripController::class, "getDriverFinishedTrips"]);
        Route::get('/get_driver_current_trips', [TripController::class, "getDriverCurrentTrips"]);
        Route::post('/add_driver_location', [DriverController::class, "addLocation"]);
    });

    Route::group(['middleware' => 'admin_authorize'], function () {
        Route::post('/delete_user', [PassengerController::class, "deleteUser"]);
        Route::post('/approve_driver', [DriverController::class, "approveDriver"]);
    });
});
