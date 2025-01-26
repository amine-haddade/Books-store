import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Create from './components/Admin/Create';
import List from './components/Admin/List';
import Update from './components/Admin/Update';
import Login from './components/Home/Auth/Login';
import Register from './components/Home/Auth/Register';
import Home from './components/Home/Home';
import Navbare from './components/Home/Layout/Navbare';
import { GetUsersData } from './Provider/Context/AppContext';
import './index.css';
import DashboardRoutes from './components/library/dashboard/DashboardRoutes';
import Nav from './components/library/dashboard/Layout/Nav';
import AllUsers from './components/Admin/AllUsers';
import AllBooks from './components/Admin/AllBooks';
import AllRequest from './components/Admin/AllRequest';
import AdminHome from './components/Admin/AdminHome';
import AddBook from './components/Admin/AddBook';

function App() {
  const { user, darkMode } = GetUsersData();

  return (
    <BrowserRouter>
      <div className={`${darkMode ? 'dark' : ''}`}>
        <div className="bg-bluebg dark:bg-darkModeBg transition-all duration-200">
          <Routes>
            {/* Routes pour la home page */}
              <Route path='/' element={<Home />} />
              <Route path="/login" element={user ? <Home /> : <Login />} />
              <Route path="/register" element={user ? <Home /> : <Register />} />
              <Route path="/Home" element={<AdminHome />}/>
              <Route path="/AllUsers" element={<AllUsers />}/>
              <Route path="/AllBooks" element={<AllBooks />}/>
              <Route path="/AllRequest" element={<AllRequest />}/>
              <Route path="/AddBook" element={<AddBook />}/>

            
              {/* Routes pour les admins */}
              
              {/* <Route path="/admin" element={<Nav />} > */}
              <Route path="/create" element={<Create />} />
              <Route path="/list" element={<List />} />
              <Route path="/update" element={<Update />} />
              <Route path="/books/update/:id" element={<Update />} />
              {/* </Route> */}

              {/* Routes du dashboard */}
              {/* <Route path='/dashboard/*' element={<DashboardRoutes />} /> */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
