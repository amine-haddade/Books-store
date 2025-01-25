const userData={
    Allusers:[],
    Loading:true,
    error:null,
    user:{},
    //tokenpour l'authentification
    token:localStorage.getItem("token") || null 
    
}

export function UserReducer(state=userData,action){
    if (action.type==="fetch_users_succes"){
        return{
            ...state,
            Allusers:action.payload,
            Loading:false,
            error:null
        }
    }
    if (action.type==="fetch_users_failed"){
        return{
            ...state,
            Loading:false,
            error:action.payload
        }
    }
    // single user types
    if(action.type==="fetch_user_succes"){
        return{
            ...state,
            user:action.payload
        }
    }
    if(action.type==="fetch_user_failed"){
        return{
            ...state,
            error:action.payload
        }
    }

    // auth types 
    if(action.type==="login_user_acces"){
        return{
            ...state,
            token:action.payload,
            error:null

        }
    }
    if(action.type==="login_user_failed"){
        return{
            ...state,
            error:action.payload

        }
    }
    return state

}