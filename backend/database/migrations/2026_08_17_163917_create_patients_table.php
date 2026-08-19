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
        Schema::create('patients', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->foreignId("doctor_id")->constrained("doctors");
            $table->string("name");
            $table->string("father_name")->nullable();
            $table->string("nick_name");
            $table->string("identity_card_number")->unique()->nullable();
            $table->date("dirth_date");
            $table->string("description")->nullable();
            $table->string("allergies")->nullable();
            $table->string("chronic_diseases")->nullable();
            $table->string("current_medications")->nullable();
            $table->string("status");
            $table->double("outstanding_balance");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('patients');
    }
};
