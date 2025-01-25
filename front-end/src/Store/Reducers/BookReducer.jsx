const BookData={
    AllBooks:[],
    Loading:true,
    error:null

}

export function BookReducer(state=BookData,action){

    if(action.type==="fetch_users_succes"){
        return{
            ...state,
            AllBooks:action.payload,
            Loading:false,
            error:null
        }
    }
    if(action.type==="fetch_users_failed"){
        return{
            ...state,
            
            Loading:false,
            error:action.payload
        }
    }
    
    return state

}