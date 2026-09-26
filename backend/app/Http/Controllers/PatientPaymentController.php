<?php

namespace App\Http\Controllers;
use App\Models\Patient;
use App\Models\PatientPayment;
use Illuminate\Http\Request;

class PatientPaymentController extends Controller
{
       public function index(Request $request){
        $doctorId = $request->user()->id;
        $payment = PatientPayment::where("doctor_id",$doctorId)->with("patient")->get();
       return response()->json(['payment' => $payment], 200);
    }
    
    public function addPatientPayment(Request $request, $id)
    {
        $request->validate([
            'amount' => 'required|numeric',
            'note' => 'nullable|string',
        ]);
        $patient = Patient::find($id);
        if (!$patient) {
            return response()->json(['message' => 'Patient not found'], 404);
        }
        if ($request->amount > $patient->outstanding_balance) {
            return response()->json(['message' => 'Payment amount exceeds outstanding balance'], 400);
        }
        $patient->outstanding_balance -= $request->amount;
        $payment = new PatientPayment();
        $payment->doctor_id = $request->user()->id;
        $payment->patient_id = $id;
        $payment->amount = $request->amount;
        $payment->note = $request->note;
        $payment->save();
        $patient->save();
        $payment->load("patient");

        return response()->json(['message' => 'Patient payment added successfully', 'payment' => $payment], 201);

    }

    public function getPatientPayments($id)
    {
        $patient = Patient::find($id);
        if (!$patient) {
            return response()->json(['message' => 'Patient not found'], 404);
        }
        $payments = PatientPayment::where('patient_id', $id)->get();
        return response()->json(['payments' => $payments], 200);
    }
}
