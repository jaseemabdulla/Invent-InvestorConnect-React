import React from 'react'
import FirstPageNavBar from '../../components/firstPageComponents/FirstPageNavBar'
import FirstPageHeroOne from '../../components/firstPageComponents/FirstPageHeroOne'
import Footer from '../../components/common/Footer'
import NavBar from '../../components/common/NavBar'

function  MainHome() {
  return (
    <div>
        <NavBar/>
        <FirstPageHeroOne/>
        <Footer/>
    </div>
  )
}

export default MainHome