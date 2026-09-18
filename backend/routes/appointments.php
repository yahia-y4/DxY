<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AppointmentController;




Route::middleware('auth:sanctum')->group(function () {
Route::get("/appointments",[AppointmentController::class,'index']);
Route::post("/appointments/store",[AppointmentController::class,'store']);
Route::Put("/appointments/edit/{id}",[AppointmentController::class,'edit']);
Route::delete("/appointments/delete/{id}",[AppointmentController::class,'delete']);
Route::put("/appointments/status/{id}",[AppointmentController::class,'updateStatus']);

});