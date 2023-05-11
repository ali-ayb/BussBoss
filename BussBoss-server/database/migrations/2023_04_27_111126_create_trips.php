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
        Schema::create('trips', function (Blueprint $table) {
            $table->id();
            $table->dateTime('departure_time');
            $table->dateTime('arrival_time');
            $table->string('bus_number');
            $table->string('source');
            $table->string('destination');
            $table->integer('seats_available');
            $table->integer('min_passengers');
            $table->boolean('is_deleted')->default(false);
            $table->unsignedBigInteger('driver_id');
            $table->foreign('driver_id')
                ->references('driver_id')
                ->on('drivers_info')
                ->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('trips');
    }
};
