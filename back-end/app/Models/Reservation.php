<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reservation extends Model
{
    use HasFactory;
    protected $fillable=[
        'start_date',
        'end_date',
        'user_id',
        'book_id',
        'status'
    ];
    
    // user relation
    public function user(){
        return $this->belongsTo(user::class);
    }

    // book relation
    public function book(){
        return $this->belongsTo(book::class);
    }

}
