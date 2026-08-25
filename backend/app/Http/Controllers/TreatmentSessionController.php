<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\TreatmentSession;


class TreatmentSessionController extends Controller
{

public function index(Request $request)
    {
        $doctorId = $request->user()->id;
        $treatmentSessions = TreatmentSession::where('doctor_id', $doctorId)->get();
        return response()->json(['treatment_sessions' => $treatmentSessions], 200);
    }

    public function store(Request $request)
    {
        $treatmentSession = new TreatmentSession();
        $treatmentSession->doctor_id = $request->user()->id;
        $treatmentSession->patient_id = $request->patient_id;
        $treatmentSession->treatment_plan_id = $request->treatment_plan_id;
        $treatmentSession->name = $request->name;
        $treatmentSession->description = $request->description;
        $treatmentSession->diagnosis = $request->diagnosis;
        $treatmentSession->treatment = $request->treatment;
        $treatmentSession->prescribed_medication = $request->prescribed_medication;
        $treatmentSession->teeth_number = $request->teeth_number;
        $treatmentSession->teeth_vertical = $request->teeth_vertical;
        $treatmentSession->teeth_horizontal = $request->teeth_horizontal;
        $treatmentSession->save();
        return response()->json(['message' => 'Treatment session created successfully', 'treatment_session' => $treatmentSession], 201);
    }

    public function edit($id , Request $request)
    {
        $treatmentSession = TreatmentSession::find($id);
        if (!$treatmentSession) {
            return response()->json(['message' => 'Treatment session not found'], 404);
        }
        $treatmentSession->name = $request->name;
        $treatmentSession->description = $request->description;
        $treatmentSession->diagnosis = $request->diagnosis;
        $treatmentSession->treatment = $request->treatment;
        $treatmentSession->prescribed_medication = $request->prescribed_medication;
        $treatmentSession->teeth_number = $request->teeth_number;
        $treatmentSession->teeth_vertical = $request->teeth_vertical;
        $treatmentSession->teeth_horizontal = $request->teeth_horizontal;
        $treatmentSession->save();
        return response()->json(['message' => 'Treatment session updated successfully', 'treatment_session' => $treatmentSession], 200);
    }

    public function delete($id)
    {
        $treatmentSession = TreatmentSession::find($id);
        if (!$treatmentSession) {
            return response()->json(['message' => 'Treatment session not found'], 404);
        }
        $treatmentSession->delete();
        return response()->json(['message' => 'Treatment session deleted successfully'], 200);
    }

    public function getSessionsByPatientId($id)
    {
        $treatmentSessions = TreatmentSession::where('patient_id', $id)->get();
        return response()->json(['treatment_sessions' => $treatmentSessions], 200);
    }

    public function getSessionsByTreatmentPlanId($id)
    {
        $treatmentSessions = TreatmentSession::where('treatment_plan_id', $id)->get();
        return response()->json(['treatment_sessions' => $treatmentSessions], 200);
    }

}
