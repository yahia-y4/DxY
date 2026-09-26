<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PatientChargeController;




Route::middleware('auth:sanctum')->group(function () {
Route::get("/charges",[PatientChargeController::class,'index']);
Route::post("/charges/add/{id}",[PatientChargeController::class,'addPatientCharge']);
Route::get("/charges/patient/{id}",[PatientChargeController::class,'getPatientCharges']);
});