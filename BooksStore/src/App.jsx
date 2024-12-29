import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import Home from './components/Home'
import Navbare from './components/Navbare'
import { GetUsersData } from './Context/AppContext'
import "./index.css"
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {
  const {user}=GetUsersData()
  
  return (
    
    <div className='bg-bluebg'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbare/>}>
          <Route index element={<Home/>}/>
          <Route path='/login' element={user?<Home/>:<Login/>}/>
          <Route path='/register' element={user? <Home/>:<Register/>}/>

          </Route>
          
        </Routes>
      </BrowserRouter>
    </div>  )
}

export default App
