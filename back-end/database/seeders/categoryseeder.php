<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories=[
            ['libelle' => 'Technologie'],
            ['libelle' => 'Mode'],
            ['libelle' => 'Sport'],
            ['libelle' => 'Alimentation'],
            ['libelle' => 'Voyage'],
            ['libelle' => 'Santé'],
            ['libelle' => 'Éducation'],
            ['libelle' => 'Musique'],
            ['libelle' => 'Finance'],
            ['libelle' => 'Jeux vidéo'],
        ];
        DB::table('categorys')->insert($categories);

    }
}
