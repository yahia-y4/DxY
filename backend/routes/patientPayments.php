<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PatientPaymentController;




Route::middleware('auth:sanctum')->group(function () {
Route::post("/payment/add/{id}",[PatientPaymentController::class,'addPatientPayment']);
Route::get("/payment/patient/{id}",[PatientPaymentController::class,'getPatientPayments']);
});