<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\TreatmentSession;
use App\Models\Patient;
use App\Models\Appointment;



class StatisticsController extends Controller
{
    public function getSessionsDay(Request $request)
    {
        $doctorId = $request->user()->id;
        $date = $request->query('date', now()->toDateString());
        $sessions = TreatmentSession::where('doctor_id', $doctorId)->whereDate('created_at', $date)->with('patient:id,name')->get();

        return response()->json(['sessions' => $sessions], 200);
    
    }
    // --count --
    public function getPatientsDayCount(Request $request){
        $doctorId = $request->user()->id;
        $date = $request->query('date',now()->toDateString());
        $count =  Patient::where('doctor_id', $doctorId)->whereDate('created_at', $date)->count();
        return response()->json(['count' => $count]);
    }
    public function getSessionsDayCount(Request $request){
        $doctorId = $request->user()->id;
        $date = $request->query('date',now()->toDateString());
        $count =  TreatmentSession::where('doctor_id', $doctorId)->whereDate('created_at', $date)->count();
        return response()->json(['count' => $count]);
    }
    public function getAppointmentsDayCount(Request $request){
        $doctorId = $request->user()->id;
        $date = $request->query('date',now()->toDateString());
        $count =  Appointment::where('doctor_id', $doctorId)->whereDate('appointment_date', $date)->count();
        return response()->json(['count' => $count]);
    }
    public function getDoingAppointmentsDayCount(Request $request){
        $doctorId = $request->user()->id;
        $date = $request->query('date',now()->toDateString());
        $count =  Appointment::where('doctor_id', $doctorId)->where('status','approved')->whereDate('appointment_date', $date)->count();
        return response()->json(['count' => $count]);
    }
    // -- count --

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
