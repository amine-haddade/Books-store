<?php

namespace App\Http\Controllers;

use App\Models\Book;
use App\Models\User;


use Illuminate\Http\Request;
use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;
use Illuminate\Support\Facades\Gate;

class BookController extends Controller implements HasMiddleware
{
    public static function Middleware(){
        return [
            new Middleware('auth:sanctum',except:['index','show'])
        ];
    } 
    public function index(){
        $books=Book::all();
        return ['books'=>$books];
    }
    public function store(Request $request){
        $data=$request->validate([
            'title'=>'required',
            'description'=>'required|min:15',
        ]);
        $book=Book::create($data);
        return ['book'=>$book];
    }
    public function show(Book $book){
        
        
        return['book'=>$book];
    }
    public function update(Request $request , Book $book){
        $data=$request->validate([
            'title'=>'required',
            'description'=>'required|min:15',
        ]);
        $book->update($data);
        return ['bookupdated'=>$book];
    }
    public function destroy (Book $book){
        $user=Auth()->user();
        Gate::authorize('checkrole',$user);
        $book->delete();
        return["message"=>"book is delete"];
    }
}
