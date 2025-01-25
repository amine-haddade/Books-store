<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Book extends Model
{
    use HasFactory;
    protected $fillable=[
        'title',
        'description',
        'pdf',
        'image',
        'category_id'
    ];

    // category relation 
    public function category(){
        return $this->belongsTo(category::class);
    }

    // reservation relation 
    public function reservation(){
        return $this->hasMany(reservation::class);
    }
}
