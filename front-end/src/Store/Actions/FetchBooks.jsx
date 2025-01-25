import axios from 'axios'

export const fetchBooks=(token)=>{
    // retourner une fonction qui prends dispatch comme paraèter 
    return async  (dispatch)=>{
        try{
            const response=await axios.get("http://127.0.0.1:8000/api/books",{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            })

            const books=response.data
            
            //dispatch pour mètre a joure le state avec les livres 
            dispatch({
                type:"fetch_books_succes",   //type de action signaler que le rècupèration a rèussi 
                payload:books
                
            })
        }catch(error){
            console.error(error)

            dispatch({
                type:"fetch_books_failed",
                payload:error.message
            })
        }
            
    }
}