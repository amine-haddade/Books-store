<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BookController;
use App\Http\Controllers\CategoryController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/',function(){
    return 'API';
});

Route::apiResource('books',BookController::class)->middleware("auth:sanctum");

Route::apiResource('Category',CategoryController::class);

Route::post('/createuser',[AuthController::class,'createuser']);

Route::post('/login',[AuthController::class,'login']);

Route::post('/logout',[AuthController::class,'logout'])->middleware("auth:sanctum");

Route::get('books/{id}/read',[BookController::class,'read'])->name('books.read');
Route::get('books/{id}/download',[BookController::class,'download'])->name('books.download');

