<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Sanctum\HasApiTokens;

class Doctor extends Model
{
    use HasApiTokens;

    protected $fillable = [
        'name',
        'email',
        'password',
    ];

       protected $hidden = [
        'password',
        'remember_token',
    ];
    public function treatmentSessions()
    {
        return $this->hasMany(TreatmentSession::class);
    }
    public function patients()
    {
        return $this->hasMany(Patient::class);
    }

    public function patientCharges()
    {
        return $this->hasMany(PatientCharge::class);
    }

    public function patientPayments()
    {
        return $this->hasMany(PatientPayment::class);
    }

    public function treatmentPlans()
    {
        return $this->hasMany(TreatmentPlan::class);
    }



}
