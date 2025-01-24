<?php

namespace App\Http\Controllers;

use App\Models\Book;


use Illuminate\Http\Request;
use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Storage;//  storage link pour affichier le image depuis la requestt http

class BookController extends Controller implements HasMiddleware
{
    public static function Middleware(){
        return [
            new Middleware('auth:sanctum',except:['index','show'])
        ];
    } 
    public function index(){
        $books=Book::with('category')->get();   
        return ['books'=>$books];
    }
    public function store(Request $request){
        $data=$request->validate([
            'title'=>'required',
            'description'=>'required|min:15',
            'category_id'=>'required|',
            'image'=>'required|max:100000|file',
            'pdf'=>'required|file|mimes:pdf'
        ]);
        if( $request->hasFile('image')){
            $nameImage=time().'_'.$request->file('image')->getClientOriginalName();
            $namePdf=time().'_'.$request->file('pdf')->getClientOriginalName();
            $imagePath=$request->file('image')->storeAs('Books/Images',$nameImage,'public');
            $pdfPath=$request->file('pdf')->storeAs('Books/Pdf',$namePdf,'public');
            $book=Book::create([
                'title'=>$data['title'],
                'description'=>$data['description'],
                'category_id'=>$data['category_id'],
                'image'=>$imagePath,
                'pdf'=>$pdfPath,
            ]);
            return ['book'=>$book];
        }
        
            else {
                // Si l'un des fichiers n'est pas présent, ne pas créer le livre
                return response()->json(['error' => 'Image and PDF are required'], 400);
            }
        
        
    }
    public function show(Book $book){
        
        
        return['book'=>$book];
    }
    public function update(Request $request , Book $book){
        $data=$request->validate([
            'title'=>'required',
            'description'=>'required|min:15',
            'category_id'=>'required'
        ]);
        $book->update($data);
        return ['bookupdated'=>$book];
    }
    public function destroy (Book $book){
        $user=Auth()->user();
        Gate::authorize('checkrole',$user);
        if($book->image){
            Storage::disk("public")->delete($book->image);
        }
        if($book->pdf){
            Storage::disk("public")->delete($book->pdf);
        }
        $book->delete();
        return["message"=>"book is delete"];
    }
    public function read($idBook){
        $book=Book::findOrFail($idBook);
        $bookPath=storage_path('app/public/'.$book->pdf);
        return response()->file($bookPath);
    }
    public function download($idBook){
        $book=Book::findOrFail($idBook);
        $bookPath=storage_path('app/public/'.$book->pdf);
        return response()->download($bookPath);
    }
}
