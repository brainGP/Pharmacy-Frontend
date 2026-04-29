import React from 'react'
import Header from '../components/header'
import TitleScreen from '../components/titleScreen'
import EasyNavigation from '../components/easyNav/easyNavigation'
import DisplayArea from '../components/displayArea/displayArea'
import Advantage from '../components/Advantage'
import Footer from '../components/footer/footer'
function Dashboard() {
  return (
    <div>
      <Header></Header>
      <TitleScreen></TitleScreen>
      <EasyNavigation></EasyNavigation>
      <DisplayArea></DisplayArea>
      <Advantage></Advantage>
      <Footer></Footer>
    </div>
  )
}

export default Dashboard