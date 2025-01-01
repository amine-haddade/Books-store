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
        // 'pdf',
        // 'image',
        'category_id'
    ];
    public function gategory(){
        return $this->belongsTo(category::class);
    }
}
