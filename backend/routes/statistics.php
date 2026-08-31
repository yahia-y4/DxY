<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\StatisticsController;

Route::middleware('auth:sanctum')->group(function () {
   Route::get('/statistics/session/day', [StatisticsController::class, 'getSessionsDay']); 

});