<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('patient_charges', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->foreignId("doctor_id")->constrained("doctors");
            $table->foreignId("patients_medical_record_id")->constrained("patients_medical_records")->cascadeOnDelete();
            $table->double("Amount");
            $table->string("note")->nullable();
            
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('patient_charges');
    }
};
