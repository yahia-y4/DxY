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
        Schema::create('sessions', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->foreignId("patients_medical_record_id")->constrained("patients_medical_records")->cascadeOnDelete();
            $table->foreignId("doctor_id")->constrained("doctors");
            $table->foreignId("treatment_plan_id")->constrained("treatment_plans")->nullable();
            $table->string("name");
            $table->string("diagnosis")->nullable();
            $table->string("treatment")->nullable();
            $table->string("prescribed_medication")->nullable();
            $table->integer("teeth_number");
            $table->string("teeth_vertical"); // فوق - تحت 
            $table->string("teeth_horizontal"); // يمين - يسار
            

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sessions');
    }
};
