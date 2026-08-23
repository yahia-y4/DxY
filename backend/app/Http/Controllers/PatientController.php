<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Patient;


class PatientController extends Controller
{
    //
public function index(Request $request)
    {
        $doctorId = $request->user()->id;
        $patients = Patient::where('doctor_id', $doctorId)->get();
        return response()->json(['patients' => $patients], 200);
    }
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

     public function edit($id , Request $request)
     {
         $patient = Patient::find($id);
         if (!$patient) {
             return response()->json(['message' => 'Patient not found'], 404);
         }
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
         return response()->json(['message' => 'Patient updated successfully', 'patient' => $patient], 200);
     }

        public function delete($id)
        {
            $patient = Patient::find($id);
            if (!$patient) {
                return response()->json(['message' => 'Patient not found'], 404);
            }
            $patient->delete();
            return response()->json(['message' => 'Patient deleted successfully'], 200);
        }
   
}