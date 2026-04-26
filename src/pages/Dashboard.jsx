import React from 'react'
import Header from '../components/header'
import TitleScreen from '../components/titleScreen'
import EasyNavigation from '../components/easyNavigation'
import DisplayArea from '../components/displayArea'
function Dashboard() {
  return (
    <div>
      <Header></Header>
      <TitleScreen></TitleScreen>
      <EasyNavigation></EasyNavigation>
      <DisplayArea></DisplayArea>
    </div>
  )
}

export default Dashboard