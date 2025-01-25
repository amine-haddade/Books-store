import axios from 'axios'

export const LoginAction=(formData)=>{
    // retourner une fonction qui prends dispatch comme paraèter 
    return async (dispatch)=>{
        try{
            const response=await axios.post("http://127.0.0.1:8000/api/login",formData)

            /// le cas de le email n‘exists pas dans la base de donnèes 
            if(response.data.errors){
                    dispatch({
                        type:"login_user_failed",
                        payload:response.data.errors
                    })
            }


            // user  exists 
            else{
                localStorage.setItem("token",response.data.token)
                dispatch({
                    type:"login_user_succes",
                    payload:response.data.token
                })
                
            }

            
        }catch(error){
            console.error(error)
            dispatch({
                type:"login_user_faile",
                payload:error.message
            })
        }
            
    }
}