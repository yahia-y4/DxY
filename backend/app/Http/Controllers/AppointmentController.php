<?php

namespace App\Http\Controllers;
use App\Models\Appointment;

use Illuminate\Http\Request;

class AppointmentController extends Controller
{

public function index(Request $request){
    $appointments = Appointment::where('doctor_id', $request->user()->id)->get();
    return response()->json($appointments);
}

public function store(Request $request){
    
    $appointment = new Appointment();
    $appointment->doctor_id = $request->user()->id;
    $appointment->patient_id = $request->patient_id;
    $appointment->appointment_date = $request->appointment_date;
    $appointment->hour = $request->hour;
    $appointment->vist_reason = $request->vist_reason;
    $appointment->note = $request->note;
    $appointment->save();

    return response()->json(['message' => 'Appointment created successfully'], 201);
}

public function edit(Request $request, $id){
    $appointment = Appointment::find($id);
    if (!$appointment) {
        return response()->json(['message' => 'Appointment not found'], 404);
    }

    $appointment->appointment_date = $request->appointment_date;
    $appointment->hour = $request->hour;
    $appointment->vist_reason = $request->vist_reason;
    $appointment->note = $request->note;
    $appointment->save();

    return response()->json(['message' => 'Appointment updated successfully']);


    
}

public function delete($id){
    $appointment = Appointment::find($id);
    if (!$appointment) {
        return response()->json(['message' => 'Appointment not found'], 404);
    }

    $appointment->delete();

    return response()->json(['message' => 'Appointment deleted successfully']);
}

public function updateStatus(Request $request, $id){
    $appointment = Appointment::find($id);
    if (!$appointment) {
        return response()->json(['message' => 'Appointment not found'], 404);
    }

    $appointment->status = $request->status;
    $appointment->save();

    return response()->json(['message' => 'Appointment status updated successfully']);
}

}
