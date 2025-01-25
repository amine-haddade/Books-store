import axios from 'axios'

export const fetchUsers=()=>{
    // retourner une fonction qui prends dispatch comme paraèter 
    return async  (dispatch)=>{
        try{
            const response=await axios.get("http://127.0.0.1:8000/api/users")
            const users=response.data
            
            //dispatch pour mètre a joure le state avec les utilsateurs 
            dispatch({
                type:"fetch_users_succes",   //type de action signaler que le rècupèration a rèussi 
                payload:users
                
            })
        }catch(error){
            console.error(error)

            dispatch({
                type:"fetch_users_failed",
                payload:error.message
            })
        }
            
    }
}