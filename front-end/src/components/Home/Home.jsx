
import { GetUsersData } from '../../Provider/Context/AppContext'
import HeroSection from './HeroSection'
import Services from './Services'
import Categorys from './Categorys'
import FreeBookSection from './FreeBookSection'
import Books from './Books'
import Subscribe from './Subscribe'
import Collection from './Collection'
import Serch from './Serch'
import Footer from './Footer'
// import { useDispatch, useSelector } from 'react-redux'
// import { fetchUsers } from '../../Store/Actions/FetchUsers'
// import { fetchBooks } from '../../Store/Actions/FetchBooks'
// import { fetchsingluser } from '../../Store/Actions/FetchSinglUser'

function Home() {

  
  // const users=useSelector(state=> state.Users)
  // const token=useSelector(state=>state.Users.token)
  // const books=useSelector(state=> state.Books)
  // const reservation=useSelector(state=> state.Reservations)


  // dipstch pour rècupèrè les doner
  // const dispatch=useDispatch()
  // useEffect(()=>{
  //     dispatch(fetchUsers())
  //     if(token){
  //       dispatch(fetchBooks(token))
  //       dispatch(fetchsingluser(token))
  //     }
  // },[dispatch,token])
  // console.log('users list',users)
  
  return (
    <div >
      <HeroSection/>
      <Services/>
      <Collection/>
      <FreeBookSection/>
      <Books/>
      <Serch/>
      <Categorys/>
      <Subscribe/>
      <Footer/>
    </div>
  )
}

export default Home
