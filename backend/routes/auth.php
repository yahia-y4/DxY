<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;


Route::post("/auth/login",[AuthController::class,'login']);
Route::get("/auth/user",[AuthController::class,"getUser"])->middleware('auth:sanctum');