<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AppointmentController;




Route::middleware('auth:sanctum')->group(function () {
Route::post("/appointments/store",[AppointmentController::class,'store']);

});