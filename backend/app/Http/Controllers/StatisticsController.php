<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\TreatmentSession;
use App\Models\Patient;


class StatisticsController extends Controller
{
    public function getSessionsDay(Request $request)
    {
        $doctorId = $request->user()->id;
        $date = $request->query('date', now()->toDateString());
        $sessions = TreatmentSession::where('doctor_id', $doctorId)->whereDate('created_at', $date)->with('patient:id,name')->get();

        return response()->json(['sessions' => $sessions], 200);
    
    }
    
}
