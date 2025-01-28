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
        Schema::table('books', function (Blueprint $table) {
            // Ajoute la colonne 'author' de type string
            $table->string('author');
            
            // Ajoute la colonne 'count' de type integer
            $table->integer('count');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('books', function (Blueprint $table) {
            // Supprime les colonnes 'author' et 'count'
            $table->dropColumn(['author', 'count']);
        });
    }
};
