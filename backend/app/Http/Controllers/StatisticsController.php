<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\TreatmentSession;



class StatisticsController extends Controller
{
    public function getSessionsDay(Request $request)
    {
        $doctorId = $request->user()->id;
        $date = $request->query('date', now()->toDateString());
        $sessions = TreatmentSession::where('doctor_id', $doctorId)->whereDate('created_at', $date)->with('patient:id,name')->get();

        return response()->json(['sessions' => $sessions], 200);
    
    }

    public function getSessionsMonth(Request $request)
    {
        $doctorId = $request->user()->id;
        $sessions = TreatmentSession::where('doctor_id', $doctorId)
            ->whereYear('created_at', now()->year)
            ->whereMonth('created_at', now()->month)
            ->with('patient:id,name')
            ->get();

        return response()->json(['sessions' => $sessions], 200);
    
    }

    public function getSessionsYear(Request $request)
    {
        $doctorId = $request->user()->id;
        $sessions = TreatmentSession::where('doctor_id', $doctorId)
            ->whereYear('created_at', now()->year)
            ->with('patient:id,name')
            ->get();

        return response()->json(['sessions' => $sessions], 200);
    
    }


    public function getPatientCount(Request $request)
    {
        $doctorId = $request->user()->id;
        $patientCount = TreatmentSession::where('doctor_id', $doctorId)->distinct('patient_id')->count('patient_id');

        return response()->json(['patient_count' => $patientCount], 200);
    }


    
}
