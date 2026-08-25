<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TreatmentSessionController;

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/sessions', [TreatmentSessionController::class, 'index']);
    Route::post('/sessions/store', [TreatmentSessionController::class, 'store']);
    Route::put('/sessions/edit/{id}', [TreatmentSessionController::class, 'edit']);
    Route::delete('/sessions/delete/{id}', [TreatmentSessionController::class, 'delete']);
    Route::get('/sessions/patient/{id}', [TreatmentSessionController::class, 'getSessionsByPatientId']);
    Route::get('/sessions/treatmentPlan/{id}', [TreatmentSessionController::class, 'getSessionsByTreatmentPlanId']);
});