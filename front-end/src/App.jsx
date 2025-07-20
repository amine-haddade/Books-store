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
import AllUsers from './components/Admin/AllUsers';

import AllRequest from './components/Admin/AllRequest';
import AdminHome from './components/Admin/AdminHome';
import AddBook from './components/Admin/AddBook';
import AllBooks  from './components/Admin/AllBooks'
import ReserveBook from './components/Admin/ReserveBook';
import Search from './components/Home/Search';
import Profile from './components/Home/Profil/Profile';
import BooksAll from './components/Home/BooksAll';

function App() {
  const { user, darkMode } = GetUsersData();

  return (
    <BrowserRouter>
      <div className={`${darkMode ? 'dark' : ''}`}>
        <div className="bg-bluebg dark:bg-darkModeBg transition-all duration-200">
          <Routes>
            {/* Routes pour la home page */}
            {/* <Route path="/ReserveBook/:id" element={user ? <Home /> : <ReserveBook />} /> */}
              <Route path='/' element={<Home />} />
              <Route path="/login" element={user ? <Home /> : <Login />} />
              <Route path="/Home" element={<AdminHome />}/>
              <Route path="/profil" element={<Profile />}/>
              <Route path="/register" element={user ? <Home /> : <Register />} />
              <Route path='/ReserveBook' element={<ReserveBook />} />
              <Route path='/Search' element={<Search />} />
              <Route path="/AllUsers" element={<AllUsers />}/>
              <Route path="/AllBooks" element={<AllBooks />}/>
              <Route path="/AllRequest" element={<AllRequest />}/>
              <Route path="/AddBook" element={<AddBook />}/>
              <Route path="/BooksAll" element={<BooksAll />}/>

            
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
