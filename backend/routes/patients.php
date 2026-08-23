<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PatientController;

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/patients', [PatientController::class, 'index']);
    Route::post('/patients/store', [PatientController::class, 'store']);
    Route::post('/patients/edit/{id}', [PatientController::class, 'edit']);
    Route::delete('/patients/delete/{id}', [PatientController::class, 'delete']);
});