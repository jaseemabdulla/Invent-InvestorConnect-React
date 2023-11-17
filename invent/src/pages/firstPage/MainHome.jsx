import React from 'react'
import FirstPageNavBar from '../../components/firstPageComponents/FirstPageNavBar'
import FirstPageHeroOne from '../../components/firstPageComponents/FirstPageHeroOne'
import Footer from '../../components/common/Footer'

function  MainHome() {
  return (
    <div>
        <FirstPageNavBar/>
        <FirstPageHeroOne/>
        <Footer/>
    </div>
  )
}

export default MainHome