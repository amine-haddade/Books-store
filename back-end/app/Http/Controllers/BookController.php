<?php

namespace App\Http\Controllers;

use App\Models\Book;


use Illuminate\Http\Request;
use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;
use Illuminate\Support\Facades\Auth;
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
    public function store(Request $request)
{
    // Validation des données
    $data = $request->validate([
        'title' => 'required',
        'description' => 'required|min:15',
        'category_id' => 'required|integer', // Assurez-vous que category_id est un entier
        'author' => 'required|string', // Assurez-vous que 'author' est une chaîne de caractères
        'count' => 'required|numeric', // Vérifiez que 'count' est numérique
        'image' => 'required|file|max:100000', // Vérifiez que l'image est un fichier et que sa taille est correcte
        'pdf' => 'required|file|mimes:pdf' // Vérifiez que le PDF est bien un fichier au format PDF
    ]);

    // Vérification si les fichiers sont présents
    if ($request->hasFile('image') && $request->hasFile('pdf')) {
        // Récupérer le nom de l'image et du PDF
        $nameImage = time() . '_' . $request->file('image')->getClientOriginalName();
        $namePdf = time() . '_' . $request->file('pdf')->getClientOriginalName();

        // Stocker les fichiers
        $imagePath = $request->file('image')->storeAs('Books/Images', $nameImage, 'public');
        $pdfPath = $request->file('pdf')->storeAs('Books/Pdf', $namePdf, 'public');

        // Créer le livre dans KOla base de données
        $book = Book::create([
            'title' => $data['title'],
            'description' => $data['description'],
            'category_id' => $data['category_id'],
            'author' => $data['author'],
            'count' => $data['count'],
            'image' => $imagePath,
            'pdf' => $pdfPath,
        ]);

        // Retourner les données du livre créé
        return ['book' => $book];
    } else {
        // Si les fichiers ne sont pas présents, retourner une erreur
        return response()->json(['error' => 'Les fichiers image et PDF sont requis.'], 400);
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
        $user=Auth::user();
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
