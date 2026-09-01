<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Patient extends Model
{

    protected $fillable = [
        'name',
        'email',
        'phone',
        'address',
        'outstanding_balance',
    ];

    public function doctor()
    {
        return $this->belongsTo(Doctor::class);
    }
    public function sessions()
   {
    return $this->hasMany(TreatmentSession::class);
   }
   
    public function charges()
    {
        return $this->hasMany(PatientCharge::class);
    }

    public function payments()
    {
        return $this->hasMany(PatientPayment::class);
    }

    
}
