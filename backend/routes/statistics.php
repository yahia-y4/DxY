<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\StatisticsController;

Route::middleware('auth:sanctum')->group(function () {
   Route::get('/statistics/session/day/count', [StatisticsController::class, 'getSessionsDayCount']); 
   Route::get('/statistics/patients/day/count', [StatisticsController::class, 'getPatientsDayCount']); 
   Route::get('/statistics/appointments/day/count', [StatisticsController::class, 'getAppointmentsDayCount']); 
   Route::get('/statistics/appointments/doing/day/count', [StatisticsController::class, 'getDoingAppointmentsDayCount']); 
   Route::get('/statistics/session/day', [StatisticsController::class, 'getSessionsDay']); 
   Route::get('/statistics/session/month', [StatisticsController::class, 'getSessionsMonth']); 
   Route::get('/statistics/session/year', [StatisticsController::class, 'getSessionsYear']); 
   Route::get('/statistics/patients/count', [StatisticsController::class, 'getPatientCount']); 

});