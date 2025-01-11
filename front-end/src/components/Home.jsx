import React from 'react'
import { GetUsersData } from '../Context/AppContext'
import HeroSection from './Home/HeroSection'
import Services from './Home/Services'
import Categorys from './Home/Categorys'
import FreeBookSection from './Home/FreeBookSection'
import Books from './Home/Books'
import Subscribe from './Home/Subscribe'
import Collection from './Home/Collection'
import Serch from './Home/Serch'
import Footer from './Home/Footer'

function Home() {
  
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
