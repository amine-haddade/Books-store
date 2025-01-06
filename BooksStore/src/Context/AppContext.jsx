import { createContext, useContext, useEffect, useState } from 'react'
const AppContext=createContext()
export  function AppProvider({children}) {
  const [token,setToken]=useState(localStorage.getItem("token"))
  const [user,setUser]=useState(null)
  const [listBooks,setListBooks]=useState([])
  const [listCategory,setListCategory]=useState([])

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
        "Content_Type":"application/json"
      }
    })
    const data=await res.json()
    if(res.ok){
      console.log(data)
      setListBooks(data.books)
    }
  }
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
  useEffect(()=>{
    if(token){
      getUser()
      getBooks()
      geetCategory()
    }
  },[token])

 
  
  return (
    <AppContext.Provider value={{token,setToken,user,setUser,listBooks,setListBooks,listCategory}}>
      {children}
    </AppContext.Provider>
  )
}
export   function GetUsersData(){
  return useContext(AppContext)
}
