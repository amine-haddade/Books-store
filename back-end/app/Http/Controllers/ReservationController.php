<?php

namespace App\Http\Controllers;

use App\Http\Requests\reservationRequest;
use App\Models\Reservation;
use Illuminate\Http\Request;

class ReservationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $AllReservation=Reservation::with(['book','user'])->get();

        return response()->json([
            'succes'=>true,
            'message'=>' les resrevation recupèrer avec succes',
            'data'=>$AllReservation
            
        ],200);
    }

    /**
     * Show the form for creating a new resource.
     */
    

    /**
     * Store a newly created resource in storage.
     */
    public function store(reservationRequest $request)
    {
        $datareservation=$request->validated();
        $reservation=Reservation::create($datareservation);
        return  response()->json([
            'succes'=>true,
            'message'=>'la resrvation son crèe avec succes',
            'data'=>$reservation
        ],200);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $reservation=Reservation::with(['book','user'])->find($id);
        if(!$reservation){
            return response()->json([
                'succes'=>false,
                'message'=>'reservation introuvable',
                
                
            ],404);
        }
        return response()->json([
            'succes'=>true,
            'message'=>'la reservation a ètè rècupèrèe avec succès  ',
            'data'=>$reservation
            
            
        ],200);
    }

    /**
     * Show the form for editing the specified resource.
     */
    

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $reservation=Reservation::find($id);
        if(!$reservation){
            return response()->json([
                'succes'=>false,
                'message'=>'reservation introuvable',
                
                
            ],404);
        }

        $reservation->delete();

        return response()->json([
            'succes'=>true,
            'message'=>'la reservation a ètè supprimer  avec succès  ',
          
            
            
        ],200);

    }

    // methode pour la reponse de  resrvation
    public function ValiderReservation(Request $request,string $id){


        $reservation=Reservation::find($id);
        if(!$reservation){
            return response()->json([
                'succes'=>false,
                'message'=>'reservation introuvable',
                
                
            ],404);
        }

        $status=$request->input('status');
        if(!in_array($status,['approved','canceled'])){
            return response()->json([
                'succes'=>false,
                'message'=>'status invalide le status sont approved ou cancled',
            ],400);

        }

        $reservation->status=$status;
        $reservation->save();
        return response()->json([
            'succes'=>true,
            'message'=>'la reservation a ètè été mise a jour   avec succès  ',
            'data'=>$reservation
          
            
            
        ],200);

    }
}
