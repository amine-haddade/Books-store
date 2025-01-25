import { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios'
const AppContext=createContext()
export  function AppProvider({children}) {
  const [darkMode,setDarkMod]=useState(localStorage.getItem("dark")==="true")
  const [token,setToken]=useState(localStorage.getItem("token"))
  
  const [listUsers,setListUsers]=useState([])
  const [user,setUser]=useState(null)
  const [listBooks,setListBooks]=useState([])
  const [listCategory,setListCategory]=useState([])
  const [listReservations,setListReservation]=useState([])

  const handelLightMode=()=>{
    const newMode = !darkMode;
    setDarkMod(newMode);  
    localStorage.setItem("dark", newMode);
}





  ///// ********************** users partie *************************////

  // list users 


  function getAllUsers(){
    axios
    .get('http://127.0.0.1:8000/api/users',{
      headers:{
        Authorization: `Bearer ${token}`,
        
      }
    })
    .then((response)=>{
      console.log(response.data.data)
      setListUsers(response.data.data)
    })
    .catch((error)=>{
      console.error(error)
    })
  }
  /// trouver le user concter basè sur le token crèe sur le authentifacation la premuere fois 
  async function getUser(){
      const res=await fetch('api/user',{
        headers:{
          Authorization:`Bearer ${token}`,
          
        },
      })
      const data=await res.json();
      if(res.ok){
        setUser(data)
      }
  }

  // log out 
  async function handellogout(e){
      e.preventDefault()
      const res=await fetch('/api/logout',{
          method:"post",
          headers:{
              Authorization:`Bearer ${token}` 
          }
      })
      const data =await res.json()
      console.log(data)
      if (res.ok){
          setUser(null)
          setToken(null)
          localStorage.removeItem("token")
      }
  	}
    
    /// partie books 
    
    /// books 
    async function getBooks(){
      const res=await fetch("api/books",{
        method:"get",
        headers:{
          Authorization:`Bearer ${token}`,
          "Content_Type":"application/json"
        }
      })
      const data=await res.json()
      if(res.ok){
        console.log(data)
        setListBooks(data.books)
      }
    }
    
    
    // category ftech
    async function geetCategory(){
      const res =await fetch('api/Category',{
        method:"get",
        headers:{
          Authorization:`Bearer ${token}`,
          "Content_Type":"application/json"
        }
      })
      const data=await res.json()
      if(res.ok){
        console.log(data)
        setListCategory(data.categorys)
      }
    }


    // reservation partie

    function getReservation(){
      axios
      .get('http://127.0.0.1:8000/api/reservation',{
        headers:{
          Authorization: `Bearer ${token}`,
          
        }
      })
      .then((response)=>{
        console.log(response.data.data)
        setListReservation(response.data.data)
      })
      .catch((error)=>{
        console.error(error)
      })
    }
    
    // create reservation 
   
    function createReservation(dd){
      axios
      .post('http://127.0.0.1:8000/api/reservation',dd,{
        headers:{
          Authorization: `Bearer ${token}`,
          
        }
      })
      .then((response)=>{
        console.log(response.data)
        
      })
      .catch((error)=>{
        console.error(error)
      })
    }

    // valide resrevation 

    function valideReservation(data){
      axios
      .post(`http://127.0.0.1:8000/api/reservation/${data.id}/validation`,{status:data.status},{
        headers:{
          Authorization: `Bearer ${token}`,
          
        }
      })
      .then((response)=>{
        console.log(response.data)
        
      })
      .catch((error)=>{
        console.error(error.response ? error.response.data : error.message)
      })
    }
    // const data = {
    //   id: 4, // ID de la réservation que vous souhaitez valider
    //   status: "canceled", // Nouveau statut de la réservation
    // };

    // valideReservation(data);
    





  
  useEffect(()=>{
    if(token){
      getAllUsers()
      getUser()
      getBooks()
      geetCategory()
      getReservation()
    }
  },[token])
  
 
  
  return (
    <AppContext.Provider value=
    {{    
          /* user data 
          */token,setToken,user,setUser,handellogout,

          /* book data 
          */
          listBooks,setListBooks,listCategory,

          /* reservation data 
          */
          listReservations,setListReservation,createReservation,valideReservation,

          /* app  data style
          */  
          darkMode,handelLightMode
    }}>
      {children}
    </AppContext.Provider>
  )
}
export   function GetUsersData(){
  return useContext(AppContext)
}
