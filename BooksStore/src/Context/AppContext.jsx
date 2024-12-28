import { createContext, useContext, useEffect, useState } from 'react'
const AppContext=createContext()
export  function AppProvider({children}) {
  const [token,setToken]=useState(localStorage.getItem("token"))
  const [user,setUser]=useState(null)

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
  useEffect(()=>{
    if(token){
      getUser()
    }
  },[token])
  return (
    <AppContext.Provider value={{token,setToken,user,setUser}}>
      {children}
    </AppContext.Provider>
  )
}
export   function GetUsersData(){
  return useContext(AppContext)
}
