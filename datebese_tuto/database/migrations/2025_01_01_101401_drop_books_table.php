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
        Schema::dropIfExists('books');
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // Vous pouvez recréer la table ici si nécessaire, mais cela dépend de vos besoins.
        Schema::create('books', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text("description");
            $table->string('pdf');
            $table->string('image');
            $table->unsignedBigInteger('category_id');
            $table->foreign('category_id')->references('id')->on('categorys')->onDelete('cascade');
            $table->timestamps();
        });
    }
};
