
import Create from './components/Admin/Create'
import List from './components/Admin/List'
import Update from './components/Admin/Update'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import Home from './components/Home'
import Navbare from './components/Layout/Navbare'
import { GetUsersData } from './Context/AppContext'
import "./index.css"
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {
  
  
  const {user,darkMode}=GetUsersData()
  
  return (
    <div className={`${darkMode ? 'dark':''}`}>
      <div className='bg-bluebg dark:bg-darkModeBg transition-all duration-200 '>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Navbare />}>
            <Route index element={<Home/>}/>
            <Route path='/login' element={user?<Home/>:<Login/>}/>
            <Route path='/register' element={user? <Home/>:<Register/>}/>
            
            {/*route pour les admin*/}
            <Route path='/create' element={<Create/>}/>
            <Route path='/list' element={<List/>}/>
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
