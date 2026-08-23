<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PatientController;

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/patients/store', [PatientController::class, 'store']);
});