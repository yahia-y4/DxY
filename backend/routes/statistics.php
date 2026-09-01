<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\StatisticsController;

Route::middleware('auth:sanctum')->group(function () {
   Route::get('/statistics/session/day', [StatisticsController::class, 'getSessionsDay']); 
   Route::get('/statistics/session/month', [StatisticsController::class, 'getSessionsMonth']); 
   Route::get('/statistics/session/year', [StatisticsController::class, 'getSessionsYear']); 
   Route::get('/statistics/patients/count', [StatisticsController::class, 'getPatientCount']); 

});