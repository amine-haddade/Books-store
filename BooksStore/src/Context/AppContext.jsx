import { createContext, useContext, useEffect, useState } from 'react'
const AppContext=createContext()
export  function AppProvider({children}) {
  const [token,setToken]=useState(localStorage.getItem("token"))
  const [user,setUser]=useState(null)
  const [listBooks,setListBooks]=useState([])

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
  async function getBooks(){
    const res=await fetch("api/books",{
      method:"get",
      headers:{
        Authorization:`Bearer ${token}`,
      }
    })
    const data=await res.json()
    if(res.ok){
      console.log(data)
      setListBooks(data.books)
    }
  }
  useEffect(()=>{
    if(token){
      getUser()
      getBooks()
    }
  },[token])

 
  
  return (
    <AppContext.Provider value={{token,setToken,user,setUser,listBooks,setListBooks}}>
      {children}
    </AppContext.Provider>
  )
}
export   function GetUsersData(){
  return useContext(AppContext)
}
