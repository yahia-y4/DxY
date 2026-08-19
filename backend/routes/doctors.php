<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DoctorController;


Route::post("/doctor/create",[DoctorController::class,'createDoctor']);


