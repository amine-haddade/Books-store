<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BookController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ReservationController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



Route::get('/',function(){
    return 'API';
});


// book routes 
Route::apiResource('books',BookController::class)->middleware("auth:sanctum");

Route::apiResource('Category',CategoryController::class);


Route::get('books/{id}/read',[BookController::class,'read'])->name('books.read');
Route::get('books/{id}/download',[BookController::class,'download'])->name('books.download');


// routes pour les users et auth

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/users',[AuthController::class,'Allusers']);

Route::post('/createuser',[AuthController::class,'createuser']);

Route::post('/login',[AuthController::class,'login']);

Route::post('/logout',[AuthController::class,'logout'])->middleware("auth:sanctum");

// reservation routes api 

Route::apiResource('reservation',ReservationController::class)->middleware("auth:sanctum");

Route::post('/reservation/{id}/validation',[ReservationController::class,"ValiderReservation"]);