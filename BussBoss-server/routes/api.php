<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\PassengerController;
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

Route::group(['middleware' => 'bussboss_authenticate'], function () {

    Route::get('/getPassengerFullName', [PassengerController::class, "getPassengerFullName"]);
    Route::post('/add_trip', [TripController::class, "addTrip"]);
    Route::get('/get_all_trips', [PassengerController::class, "getTotalTrips"]);
    Route::get('/get_total_paid', [PassengerController::class, "getTotalPaid"]);
});
