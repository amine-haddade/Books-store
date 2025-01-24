
import Create from './components/Admin/Create'
import List from './components/Admin/List'
import Update from './components/Admin/Update'
import Login from './components/Home/Auth/Login'
import Register from './components/Home/Auth/Register'
import Home from './components/Home/Home'
import Navbare from './components/Home/Layout/Navbare'
import { GetUsersData } from './Provider/Context/AppContext'
import "./index.css"
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {
  
  
  const {user,darkMode}=GetUsersData()
  
  return (
    <div className={`${darkMode ? 'dark':''}`}>
      <div className='bg-bluebg dark:bg-darkModeBg transition-all duration-200 '>
        <BrowserRouter>
          <Routes>


            {/* routes pour  home page  */}
            
            <Route path='/' element={<Navbare />}>
            <Route index element={<Home/>}/>
            <Route path='/login' element={user?<Home/>:<Login/>}/>
            <Route path='/register' element={user? <Home/>:<Register/>}/> 
            

            {/*route pour les admin*/}
            
            <Route path='/create' element={<Create/>}/>
            <Route path='/list' element={user && user.role==="admin"?<List/>:<Home/>}   />
            <Route path='/Update' element={<Update/>}/>
            <Route path="/books/update/:id" element={<Update/>} />
            </Route>
            
          </Routes>
        </BrowserRouter>
      </div>
    </div>
    )
}

export default App
