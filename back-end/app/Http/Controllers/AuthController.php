<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateUserRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{



    public function Allusers(){
        $AllUser=User::all();

        return response()->json([
            'succes'=>true,
            'message'=>' les user recupèrer avec succes',
            'data'=>$AllUser
            
        ],200);
    }
    public function createuser(CreateUserRequest $request){
        $datauser=$request->validated();
        $user=User::create($datauser);
        $token=$user->createToken($request->name);
        return ['user'=>$user,'token'=>$token->plainTextToken];
    }
    public function login(Request $request){
        $request->validate(['email'=>'required|email',"password"=>"required"]);
        $user=User::Where("email",$request->email)->first();
        if(!$user || !Hash::check($request->password,$user->password)){
            return [
                "errors"=>[
                    "email"=>['the provided crendetials ara incorrect']
                ]
                ];
        }
        $token=$user->createToken($user->name);
        return ['user'=>$user,'token'=>$token->plainTextToken];

        
    }
    public function logout(Request $request){
        $request->user()->tokens()->delete();
        return [
            "message"=>'you are log out'
        ];
        
    }
}
