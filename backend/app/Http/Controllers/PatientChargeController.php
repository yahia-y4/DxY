<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\PatientCharge;
use App\Models\Patient;

class PatientChargeController extends Controller
{
    public function addPatientCharge(Request $request, $id)
    {
        $request->validate([
            'amount' => 'required|numeric',
            'note' => 'nullable|string',
        ]);
        $patient = Patient::find($id);
        if (!$patient) {
            return response()->json(['message' => 'Patient not found'], 404);
        }
        $patient->outstanding_balance += $request->amount;
        $charge = new PatientCharge();
        $charge->doctor_id = $request->user()->id;
        $charge->patient_id = $id;
        $charge->amount = $request->amount;
        $charge->note = $request->note;
        $charge->save();
        $patient->save();

        return response()->json(['message' => 'Patient charge added successfully', 'charge' => $charge,'patient'=>$patient], 201);

    }

    public function getPatientCharges($id)
    {
        $patient = Patient::find($id);
        if (!$patient) {
            return response()->json(['message' => 'Patient not found'], 404);
        }
        $charges = PatientCharge::where('patient_id', $id)->get();
        return response()->json(['charges' => $charges], 200);
    }
}
