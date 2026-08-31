<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


require __DIR__.'/doctors.php';
require __DIR__.'/patients.php';
require __DIR__.'/treatmentPlans.php';
require __DIR__.'/treatmentSessions.php';
require __DIR__.'/appointments.php';
require __DIR__.'/patientCharges.php';
require __DIR__.'/patientPayments.php';
require __DIR__.'/auth.php';
require __DIR__.'/statistics.php';
