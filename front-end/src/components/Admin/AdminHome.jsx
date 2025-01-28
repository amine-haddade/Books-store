import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import {  BookDown, BookOpenCheck, CalendarDays, ChevronsDown, ChevronsUp, Eye, House, LibraryBig, LogOut, Search, Users } from 'lucide-react'
import UserProfil from'../../assets/Enemy.jpg'
import { GetUsersData } from '../../Provider/Context/AppContext'

function AdminHome() {



      //  fromat data
      function formatDate(dateString) {
        const date = new Date(dateString); // Création d'un objet Date à partir de la chaîne de caractères
        const option={year:'numeric',month:'short',day:'numeric'}
        return  date.toLocaleDateString('en-us',option)
      }  




      const {user,listUsers,listBooks,listReservations}=GetUsersData()
      const countUser=listUsers.length
      const countReservation=listReservations.length
      const countBook=listBooks.length


      //user afficher 
      const first6Users = listUsers?.slice(0, 6) ?? [];
      const first3Reservations = listReservations?.slice(0, 3) ?? [];
      const first6Books = listBooks?.slice(0, 6) ?? [];

      console.log('test',first3Reservations,first6Books,first6Users)
        

  return (
    <div className=' flex h-screen'>
      {/*  sidbare */}
      <div className='flex py-6 px-3 flex-col  bg-white w-72 sticky top-0  h-screen overflow-y-auto '>
        <div className='flex gap-2 items-center '>
            <div className='flex items-center justify-center w-9 h-9 mb-7  rounded-full bg-blueadmin'>
              <BookOpenCheck size={24} color="#ffffff" />
            </div>
            <h1 className='text-blueadmin text-3xl pb-7  border-dashed border-gray-500 '>BookWise</h1>
        </div>
        <div className="border-dashed border-t border-gray-400 mb-2"></div>

        <ul className='flex flex-col gap-1 relative  '>
          <NavLink to="/Home"  className={({ isActive }) =>  `py-3 transition duration-300 text-black w-full rounded-md px-3 flex items-center gap-2 capitalize ${isActive ? 'bg-blueadmin text-white' : ''}`}><House size={24} className="pr-1 text-gray-400" /><span>home</span></NavLink>
          <NavLink  to='/AllBooks' className={({ isActive }) =>  `py-3 transition duration-300 text-black w-full rounded-md px-3 flex items-center gap-2 capitalize ${isActive ? 'bg-blueadmin text-white' : ''}`}><Users size={24} className="pr-1 text-gray-400" /><span>All Users</span></NavLink>
          <NavLink to='/AllBooks' className={({ isActive }) =>  `py-3 transition duration-300 text-black w-full rounded-md px-3 flex items-center gap-2 capitalize ${isActive ? 'bg-blueadmin text-white' : ''}`}><LibraryBig size={24}  className="pr-1 text-gray-400"/><span>All books</span></NavLink>
          <NavLink to='/AllRequest' className={({ isActive }) =>   `py-3 transition duration-300 text-black w-full rounded-md px-3 flex items-center gap-2 capitalize ${isActive ? 'bg-blueadmin text-white' : ''}` }><BookDown size={24}  className="pr-1 text-gray-400" /><span>All requeste</span></NavLink>
          {/* <NavLink className={({ isActive }) =>  `py-3 transition duration-300 text-black w-full rounded-md px-3 flex items-center gap-2 capitalize ${isActive ? 'bg-blueadmin text-white' : ''}`}><House size={24} className="pr-1  text-gray-400 " /><span>All Users</span></NavLink> */}
          <Link className=' transition-all duration-300 p-1  text-black w-full rounded-3xl border border-gray-100 shadow-sm     flex items-center   capitalize  absolute  top-96    '>
              <div><img className='rounded-full object-cover transition duration-300 w-8 h-8 mr-2 relative'  src={user ? `http://localhost:8000/storage/${user.photo}`: UserProfil} alt="" /> <div className='absolute w-3 h-3 rounded-full bg-green-500 left-6 top-7'></div></div>
            <div className='flex   flex-col relative mr-6 '>
              <span className='text-[14px] font-medium text-black transition duration-300'>{user ? user.name: 'Chargement...'}</span>
              <span className='text-[10px] text-gray-500 font-medium transition duration-300 '>{user ? user.email: 'Chargement...'}</span>

            </div>
           
            <LogOut size={28} color="#ff0000" className=''/>            
          </Link>

        </ul>
      </div>
        <div className='bg-bgadmin  w-full overflow-y-auto'>
          {/* navbare */}
              <header className='flex justify-between sticky top-0  items-center mb-4 backdrop-blur-sm drop-shadow-lg bg-white/15 p-4 z-50'>
                <div className=''>
                  <h1 className='text-xl  text-black pb-1 capitalize '>welcome {user ? user.name: 'Chargement...'}</h1>
                  <p className='text-sm text-gray-500'>Monitor All Of Your Project And Task here</p>
                </div>
                <div>
                  <div className='border-gray-500 px-2  py-2 text-gray-500 w-80 flex gap-2 bg-white rounded-md '>
                  <Search className='text-base'  />
                    <input className=' text-base w-full text-black outline-none border-none bg-transparent ' placeholder='Serach users ,books By Title Author Or genre' type="text" />
                    </div>
                </div>

              </header>
            {/* conten home admine */}
          <div className='p-4 '>
            <div  className='grid grid-cols-3 gap-4 items-center justify-between '>
                    <div className='bg-white flex flex-col gap-3 p-5 rounded-2xl shadow-md '>
                      <div className='flex gap-2 items-center '>
                        <h1 className='text-base  text-gray-600'>Reseravtion books total</h1>
                        <div className='flex  text-red-600 items-center'>
                          <ChevronsDown color="#ff0000"  size={18} />
                          <span className='text-red-600 text-lg '>6</span>
                        </div>
                      </div>
                        <h3 className='text-xl  font-semibold'>{countReservation}</h3>
                    </div>
                    <div className='bg-white flex flex-col gap-3 p-5  rounded-2xl shadow-md '>
                      <div className='flex gap-2 items-center '>
                        <h1 className='text-base  text-gray-600 capitalize'>total users</h1>
                        <div className='flex  text-green-600 items-center'>
                          <ChevronsUp className='text-green-600' size={18} />
                          <span className='text-green-600 text-lg '>3</span>
                        </div>
                      </div>
                        <h3 className='text-xl  font-semibold'>{countUser}</h3>
                    </div>
                    <div className='bg-white flex flex-col gap-3 p-5  rounded-2xl shadow-md '>
                      <div className='flex gap-2 items-center '>
                        <h1 className='text-base  text-gray-600 capitalize'>total books</h1>
                        <div className='flex  text-green-600 items-center'>
                          <ChevronsUp  className='text-green-600'  size={18} />
                          <span className='text-green-600 text-lg '>2</span>
                        </div>
                      </div>
                        <h3 className='text-xl  font-semibold'>{countBook}</h3>
                    </div>
                    
            </div>
            <div  className='w-full flex gap-2 mt-8'>
              {/*  requested all */}
              <div className='w-full flex flex-col  p-3 gap-6 ' >
                    <div className='bg-white flex flex-col  p-3 gap-3 rounded-lg shadow-xl  relative'>
                    <div className="bg-gradient-to-t from-gray-300  to-white absolute top-1/2 left-0 right-0 h-1/2 rounded-lg"></div>
                        <div className='flex justify-between px-3  '>
                          <h1 className='text-lg'>All Reservation</h1>
                          <div className=' text-base bg-blue-100 py-1 px-3 text-blue-800 rounded-3xl cursor-pointer '>View All</div>
                        </div>
                        <div className='flex flex-col gap-3'>
                          {first3Reservations.map((ele,index)=>{
                            return (
                              
                                <div key={index} className='bg-bgadmin flex items-start justify-between py-3 px-4 rounded-md z-10'>
                                  <div className='flex gap-3 '>
                                    <img src={`http://localhost:8000/storage/${ele.book.image}`} alt="" className='w-10 h-16 rounded-sm'   />
                                    <div className='flex flex-col  leading-none '>
                                      <h1 className='text-base capitalize '>{ele.book.title}</h1>
                                      <p className='text-gray-600 text-sm font-normal'>{ele.book.title}</p>
                                      <div className='flex gap-2'>
                                        <div className="flex items-center gap-2">
                                          <img src={`http://localhost:8000/storage/${ele.user.photo}`}className='w-5 h-5 object-cover rounded-full' alt="" />
                                          <span className='text-black text-sm font-normal'>{ele.user.name}</span>
                                        </div>
                                        <div className='flex items-center gap-1 '><CalendarDays size={16} className='text-gray-500  ' /> <span className='text-sm'>12/01/24</span></div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='p-2 cursor-pointer rounded-lg bg-white'>
                                  <Eye className="text-gray-500" />
                                  </div>
                                </div>
                            )
                          })}
                          
                          <div className='bg-bgadmin flex items-start justify-between py-3 px-4 rounded-md   bg-gradient-to-t from-gray-300  to-white relative z-10 '>
                            <div className='flex gap-3 '>
                              <img src={UserProfil} alt="" className='w-10 h-16 rounded-sm'   />
                              <div className='flex flex-col  leading-none '>
                                <h1 className='text-base capitalize '>amine haddade request book</h1>
                                <p className='text-gray-600 text-sm font-normal'>category  book</p>
                                <div className='flex gap-2'>
                                  <div className="flex items-center gap-2">
                                    <img src={UserProfil} className='w-5 h-5 object-cover rounded-full' alt="" />
                                    <span className='text-black text-sm font-normal'>amine haddade </span>
                                  </div>
                                  <div className='flex items-center gap-1 '><CalendarDays size={16} className='text-gray-500  ' /> <span className='text-sm'>12/01/24</span></div>
                                </div>
                              </div>
                            </div>
                            <div className='p-2 cursor-pointer rounded-lg bg-white'>
                            <Eye className="text-gray-500" />
                            </div>
                          </div>
                      </div>
                    </div>

                    {/* users account */}
                    <div className='bg-white  p-3 gap-3 rounded-lg shadow-xl  relative '>
                    <div className="bg-gradient-to-t from-gray-300  to-white absolute top-1/2 left-0 right-0 h-1/2 rounded-lg"></div>

                        <div className='flex justify-between px-3  '>
                          <h1 className='text-lg'>All Users</h1>
                          <div className=' text-base bg-blue-100 py-1 px-3 text-blue-800 rounded-3xl cursor-pointer '>View All</div>
                        </div>
                        
                        <div className="grid grid-cols-3 grid-rows-2 gap-3 mt-5 ">
                         {first6Users.map((ele,index)=>{
                          return(

                              <div key={index}  className='flex flex-col items-center justify-center  py-3 rounded-md bg-bgadmin z-20'>
                                <img src={`http://localhost:8000/storage/${ele.photo}`} alt=""  className='h-10 w-10 rounded-full mb-3 object-cover '/>
                                <h1 className='tex-base  capitalize  leading-none pb-[3px] '>{ele.name}</h1>
                                <p className='text-gray-400  font-light  text-sm leading-none'>{ele.email}</p>
                              </div>
                          )
                         })} 
                          {/* <div  className='flex flex-col items-center justify-center  py-3 rounded-md bg-bgadmin z-20'>
                            <img src={UserProfil} alt=""  className='h-10 w-10 rounded-full mb-3 object-cover '/>
                            <h1 className='tex-base  capitalize  leading-none pb-[3px] '>amine hadded</h1>
                            <p className='text-gray-400  font-light  text-sm leading-none'>amine@gmail.com</p>
                          </div>
                          <div  className='flex flex-col items-center justify-center  py-3 rounded-md bg-bgadmin z-20'>
                            <img src={UserProfil} alt=""  className='h-10 w-10 rounded-full mb-3 object-cover '/>
                            <h1 className='tex-base  capitalize  leading-none pb-[3px] '>amine hadded</h1>
                            <p className='text-gray-400  font-light  text-sm leading-none'>amine@gmail.com</p>
                          </div> */}
                          
                          
                          <div  className='flex flex-col items-center justify-center  py-3 rounded-md bg-bgadmin bg-gradient-to-t from-gray-300  to-white relative z-10'>
                            <img src={UserProfil} alt=""  className='h-10 w-10 rounded-full mb-3 object-cover '/>
                            <h1 className='tex-base  capitalize  leading-none pb-[3px] '>amine hadded</h1>
                            <p className='text-gray-400  font-light  text-sm leading-none'>amine@gmail.com</p>
                          </div>
                          <div  className='flex flex-col items-center justify-center  py-3 rounded-md bg-bgadmin bg-gradient-to-t from-gray-300  to-white relative z-10'>
                            <img src={UserProfil} alt=""  className='h-10 w-10 rounded-full mb-3 object-cover '/>
                            <h1 className='tex-base  capitalize  leading-none pb-[3px] '>amine hadded</h1>
                            <p className='text-gray-400  font-light  text-sm leading-none'>amine@gmail.com</p>
                          </div>
                          <div  className='flex flex-col items-center justify-center  py-3 rounded-md bg-bgadmin bg-gradient-to-t from-gray-300  to-white relative z-10'>
                            <img src={UserProfil} alt=""  className='h-10 w-10 rounded-full mb-3 object-cover '/>
                            <h1 className='tex-base  capitalize  leading-none pb-[3px] '>amine hadded</h1>
                            <p className='text-gray-400  font-light  text-sm leading-none'>amine@gmail.com</p>
                          </div>
                          
                          
                          

                        </div>
                    </div>
              </div>
              {/* all books */}
              <div className='bg-white flex flex-col  p-3 gap-4 rounded-lg shadow-xl  relative w-full'>
              <div className="bg-gradient-to-t from-gray-300  to-white absolute top-1/2 left-0 right-0 h-1/2 rounded-lg"></div>
                <div className='flex justify-between px-3  '>
                  <h1 className='text-lg'>All Books</h1>
                  <div className=' text-base bg-blue-100 py-1 px-3 text-blue-800 rounded-3xl cursor-pointer '>View All</div>
                </div>
                {first6Books.map((ele,index)=>{
                  return  (
                  <div key={index} className='bg-bgadmin flex items-start justify-between py-3 px-4 rounded-md z-20'>
                        <div className='flex gap-3 '>
                          <img src={`http://localhost:8000/storage/${ele.image}`} alt="" className='w-10 h-16 rounded-sm'   />
                          <div className='flex flex-col  leading-none '>
                            <h1 className='text-base capitalize '>{ele.title}</h1>
                            <p className='text-gray-600 text-sm font-normal'>{ele.category.libelle}</p>
                            <div className='flex gap-2'>
                              
                              <div className='flex items-center gap-1 '><CalendarDays size={16} className='text-gray-500  ' /> <span className='text-sm'>{formatDate(ele.created_at)}</span></div>
                            </div>
                          </div>
                        </div>
                  </div>
                  )
                })}
                
               
                <div className='bg-bgadmin flex items-start justify-between py-3 px-4 rounded-md z-10'>
                  <div className='flex gap-3 '>
                    <img src={UserProfil} alt="" className='w-10 h-16 rounded-sm'   />
                    <div className='flex flex-col  leading-none '>
                      <h1 className='text-base capitalize '>amine haddade request book</h1>
                      <p className='text-gray-600 text-sm font-normal'>category  book</p>
                      <div className='flex gap-2'>
                        
                        <div className='flex items-center gap-1 '><CalendarDays size={16} className='text-gray-500  ' /> <span className='text-sm'>12/01/24</span></div>
                      </div>
                    </div>
                  </div>
                        
                  </div>
                <div className='bg-bgadmin flex items-start justify-between py-3 px-4 rounded-md z-10'>
                  <div className='flex gap-3 '>
                    <img src={UserProfil} alt="" className='w-10 h-16 rounded-sm'   />
                    <div className='flex flex-col  leading-none '>
                      <h1 className='text-base capitalize '>amine haddade request book</h1>
                      <p className='text-gray-600 text-sm font-normal'>category  book</p>
                      <div className='flex gap-2'>
                        
                        <div className='flex items-center gap-1 '><CalendarDays size={16} className='text-gray-500  ' /> <span className='text-sm'>12/01/24</span></div>
                      </div>
                    </div>
                  </div>
                        
                  </div>
                  <div className='bg-bgadmin flex items-start justify-between py-3 px-4 rounded-md bg-gradient-to-t from-gray-100  to-white relative z-10'>
                    <div className='flex gap-3 '>
                      <img src={UserProfil} alt="" className='w-10 h-16 rounded-sm'   />
                      <div className='flex flex-col  leading-none '>
                        <h1 className='text-base capitalize '>amine haddade request book</h1>
                        <p className='text-gray-600 text-sm font-normal'>category  book</p>
                        <div className='flex gap-2'>
                          
                          <div className='flex items-center gap-1 '><CalendarDays size={16} className='text-gray-500  ' /> <span className='text-sm'>12/01/24</span></div>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                  <div className='bg-bgadmin flex items-start justify-between py-3 px-4 rounded-md bg-gradient-to-t from-gray-100  to-white relative z-10'>
                    <div className='flex gap-3 '>
                      <img src={UserProfil} alt="" className='w-10 h-16 rounded-sm'   />
                      <div className='flex flex-col  leading-none '>
                        <h1 className='text-base capitalize '>amine haddade request book</h1>
                        <p className='text-gray-600 text-sm font-normal'>category  book</p>
                        <div className='flex gap-2'>
                          
                          <div className='flex items-center gap-1 '><CalendarDays size={16} className='text-gray-500  ' /> <span className='text-sm'>12/01/24</span></div>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                  
                  <div className='bg-bgadmin flex items-start justify-between py-3 px-4 rounded-md   bg-gradient-to-t from-gray-300  to-white relative z-10 '>
                    <div className='flex gap-3 '>
                      <img src={UserProfil} alt="" className='w-10 h-16 rounded-sm'   />
                      <div className='flex flex-col  leading-none '>
                        <h1 className='text-base capitalize '>amine haddade request book</h1>
                        <p className='text-gray-600 text-sm font-normal'>category  book</p>
                        <div className='flex gap-2'>
                          
                          <div className='flex items-center gap-1 '><CalendarDays size={16} className='text-gray-500  ' /> <span className='text-sm'>12/01/24</span></div>
                        </div>
                      </div>
                    </div>
                        
                      
                  </div>
              
              </div>
            </div>
          </div>
      </div>
    </div>

 
           

    
  );
}

export default AdminHome;
