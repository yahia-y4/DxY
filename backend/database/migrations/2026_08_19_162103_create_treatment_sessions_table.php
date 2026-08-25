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
        Schema::create('treatment_sessions', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->foreignId("doctor_id")->constrained("doctors");
            $table->foreignId("patient_id")->constrained("patients");
           $table->foreignId("treatment_plan_id")->nullable()->constrained("treatment_plans");
            $table->string("name");
            $table->string("description")->nullable();
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
        Schema::dropIfExists('treatment_sessions');
    }
};
