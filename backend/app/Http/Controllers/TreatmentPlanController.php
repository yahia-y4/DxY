<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\TreatmentPlan;


class TreatmentPlanController extends Controller
{
    public function index(Request $request)
    {
        $doctorId = $request->user()->id;
        $treatmentPlans = TreatmentPlan::where('doctor_id', $doctorId)->with("patient")->get();
        return response()->json(['treatment_plans' => $treatmentPlans], 200);
    }
    public function store(Request $request)
    {

        $treatmentPlan = new TreatmentPlan();
        $treatmentPlan->doctor_id = $request->user()->id;
        $treatmentPlan->patient_id = $request->patient_id;
        $treatmentPlan->name = $request->name;
        $treatmentPlan->description = $request->description;
        $treatmentPlan->save();
        $treatmentPlan->load("patient");
        return response()->json(['message' => 'Treatment plan created successfully', 'treatment_plan' => $treatmentPlan], 201);

    }

    public function edit($id , Request $request)
    {
        $treatmentPlan = TreatmentPlan::find($id);
        if (!$treatmentPlan) {
            return response()->json(['message' => 'Treatment plan not found'], 404);
        }
        $treatmentPlan->name = $request->name;
        $treatmentPlan->description = $request->description;
        $treatmentPlan->save();
        $treatmentPlan->load("patient");
        return response()->json(['message' => 'Treatment plan updated successfully', 'treatment_plan' => $treatmentPlan], 200);
    }

    public function delete($id)
    {
        $treatmentPlan = TreatmentPlan::find($id);
        if (!$treatmentPlan) {
            return response()->json(['message' => 'Treatment plan not found'], 404);
        }
        $treatmentPlan->delete();
        return response()->json(['message' => 'Treatment plan deleted successfully'], 200);
    }

    public function getTreatmentPlansByPatientId($id)
    {
        $treatmentPlans = TreatmentPlan::where('patient_id', $id)->get();
        return response()->json(['treatment_plans' => $treatmentPlans], 200);
    }
    
      



}