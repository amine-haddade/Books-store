<?php

namespace Database\Seeders;

use App\Models\Book;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class Bookseeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Book::create([
            
                'title'=>'ui/ux',
                'description'=>"une livre qui ofrre multitide conseil pour apprendre le domaine de desgin ui/ux"
            
        ]);
    }
}
