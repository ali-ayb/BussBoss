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
        Schema::create('reservations', function (Blueprint $table) {
            $table->id();
            $table->enum('status', ['ongoing', 'finished', 'canceled'])->default('ongoing');
            $table->dateTime('reserved_on');
            $table->unsignedBigInteger('trip_id');
            $table->foreign('trip_id')
                ->references('id')
                ->on('trips');
            $table->unsignedBigInteger('passenger_id');
            $table->foreign('passenger_id')
                ->references('id')
                ->on('passengers_info');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('reservations');
    }
};
