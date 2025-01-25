import axios from 'axios'

export const fetchsingluser=(token)=>{
    // retourner une fonction qui prends dispatch comme paraèter 
    return async  (dispatch)=>{
        try{
            const response=await axios.get("http://127.0.0.1:8000/api/user",{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            })
            const user=response.data
            
            //dispatch pour mètre a joure le state avec les utilsateurs 
            dispatch({
                type:"fetch_user_succes",   //type de action signaler que le rècupèration a rèussi 
                payload:user
                
            })
        }catch(error){
            console.error(error)

            dispatch({
                type:"fetch_user_failed",
                payload:error.message
            })
        }
            
    }
}