<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Doctor;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        $doctor = Doctor::where(
            'email',
            $credentials['email']
        )->first();

        if (!$doctor || !Hash::check(
            $credentials['password'],
            $doctor->password
        )) {
            return response()->json([
                'message' => 'Invalid credentials',
            ], 401);
        }

        $token = $doctor->createToken('doctor-token')->plainTextToken;

           

        return response()->json([
            'doctor' => $doctor,
            'token' => $token,
        ]);
    }
}
