<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PatientCharge extends Model
{
    //

    protected $fillable = [
        'doctor_id',
        'patient_id',
        'amount',
        'note',
    ];

    public function doctor()
    {
        return $this->belongsTo(Doctor::class);
    }

    public function patient()
    {
        return $this->belongsTo(Patient::class);
    }
    
}
