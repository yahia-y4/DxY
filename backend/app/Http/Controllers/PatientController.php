<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Patient;


class PatientController extends Controller
{
    //

    public function store(Request $request)
    {
        $patient = new Patient();
        $patient->doctor_id = $request->user()->id;
        $patient->name = $request->name;
        $patient->father_name = $request->father_name;
        $patient->nick_name = $request->nick_name;
        $patient->identity_card_number = $request->identity_card_number;
        $patient->dirth_date = $request->dirth_date;
        $patient->description = $request->description;
        $patient->allergies = $request->allergies;
        $patient->chronic_diseases = $request->chronic_diseases;
        $patient->current_medications = $request->current_medications;
        $patient->status = $request->status;
        $patient->outstanding_balance = $request->outstanding_balance;
        $patient->save();
        return response()->json(['message' => 'Patient created successfully', 'patient' => $patient], 201);
    
     }
}