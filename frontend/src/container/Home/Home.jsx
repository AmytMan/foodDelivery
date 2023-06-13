import React from 'react'
import Navbars from '../../components/Navbar'
import Footer from '../../components/Footer'
import Body from '../body/Body'
import HeaderImage from '../../components/HeaderImage'

function Home() {
  return (
    <div>
        <Navbars/>
       
        <HeaderImage/>
        
        <Body/>
       
        
        <Footer/>
    </div>
  )
}

export default Home