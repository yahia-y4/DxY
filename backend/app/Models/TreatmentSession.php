<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TreatmentSession extends Model
{

    public function doctor()
    {
        return $this->belongsTo(Doctor::class);
    }

    public function treatmentPlan()
    {
        return $this->belongsTo(TreatmentPlan::class);
    }
public function patient()
{
    return $this->belongsTo(Patient::class);
}

}
