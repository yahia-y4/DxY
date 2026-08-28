<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TreatmentPlanController;

Route::middleware('auth:sanctum')->group(function () {
   
    Route::get('/treatmentPlans', [TreatmentPlanController::class, 'index']);
    Route::post('/treatmentPlans/store', [TreatmentPlanController::class, 'store']);
    Route::put('/treatmentPlans/edit/{id}', [TreatmentPlanController::class, 'edit']);
    Route::delete('/treatmentPlans/delete/{id}', [TreatmentPlanController::class, 'delete']);
    Route::get('/treatmentPlans/patient/{id}', [TreatmentPlanController::class, 'getTreatmentPlansByPatientId']);

});