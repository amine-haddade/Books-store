<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateUserRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Models\User;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;



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
        if($request->hasFile('photo')){
            $photoName=time().'_'.$request->file('photo')->getClientOriginalName();
            $photoPath=$request->file('photo')->storeAs('User/Photos',$photoName,'public');
            $datauser['photo']=$photoPath;  
            $user=User::create($datauser);
            $token=$user->createToken($request->name);
            return response()->json([
                'user'=>$user,
                'token'=>$token->plainTextToken
            ]);
            
        }
        else{
            return response()->json(['error'=>'le file de user ne pas uploads'],404);
        }
        
    }
    public function updateuser(UpdateUserRequest $request,User $user){
    
        $data=$request->validated();
        if(!empty($data['password'])){
            $data['password']=bcrypt($data['password']);
        }else{
            unset($data['password']);
        }
        if($request->hasFile('photo')){
            $photoNameUpdatd=time().'_'.$request->file('photo')->getClientOriginalName();
            $photoPathUpdatd=$request->file('photo')->storeAs('User/Photos',$photoNameUpdatd,'public');
            $data['photo']=$photoPathUpdatd;
        }
        $user->update($data);
        return response()->json(['message'=>'user modifier avec succès ','user'=>$user]);
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
    public function logout(Request $request) {
        // Vérifie que l'utilisateur est bien authentifié
        $user = $request->user();
    
        if ($user) {
            $user->tokens()->delete(); // Supprime les tokens
            return response()->json([
                "message" => "Vous êtes déconnecté."
            ], 200);
        }
    
        return response()->json([
            "message" => "Aucun utilisateur authentifié."
        ], 401);
    }
    
    public function destroy($id)
        {
            // Recherche de l'utilisateur par ID
            $Admin=Auth::user();
            Gate::authorize('checkrole',$Admin);
            
            $user_delete = User::find($id);
            if($user_delete->photo){
                Storage::disk("public")->delete($user_delete->photo);
            }
            
            if (!$user_delete) {
                return response()->json(['error' => 'Utilisateur introuvable'], 404);
            }
            // Vérification si l'utilisateur existe

            // Suppression de l'utilisateur
            $user_delete->delete();

            // Retourner une réponse JSON
            return response()->json(['message' => 'Utilisateur supprimé avec succès'], 200);
        }
}
