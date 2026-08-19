<?php

namespace App\Http\Controllers;
use App\Models\Doctor;
use Illuminate\Http\Request;

class DoctorController extends Controller
{
    

public function createDoctor(Request $request){
    $doctor = new Doctor();
    $doctor->name = $request->name;
    $doctor->email = $request->email;
    $doctor->password = $request->password;
    $doctor->specialization = $request->specialization;
    $doctor->role = "doctor";
    $doctor->save();
    return response()->json(['message' => 'Doctor created successfully','data'=>$doctor], 201);


}
}
