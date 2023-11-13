import React from 'react'
import FirstPageNavBar from '../../components/firstPageComponents/FirstPageNavBar'
import FirstPageHeroOne from '../../components/firstPageComponents/FirstPageHeroOne'
import FirstPageInvester from '../../components/firstPageComponents/FirstPageInvester'
import FirstPageEntrepeneur from '../../components/firstPageComponents/FirstPageEntrepeneur'


function  MainHome() {
  return (
    <div>
        <FirstPageNavBar/>
        <FirstPageHeroOne/>
        <FirstPageInvester/>
        <FirstPageEntrepeneur/>
    </div>
  )
}

export default MainHome