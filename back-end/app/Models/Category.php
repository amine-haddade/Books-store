<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{

    protected $table = 'categorys'; // Spécifiez le nom correct de la table
    use HasFactory;
    protected $fillable=[
        'libelle',
    ];


    // book relation
    public function Book(){
        return $this->hasMany(book::class);
    }
}
