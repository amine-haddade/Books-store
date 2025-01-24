import React from 'react'
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
