import React from 'react'
import './Home.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import Feed from '../../components/Feed/Feed'
import { useState } from 'react'
import TitleContent from '../../components/TitleContent/TitleContent'

const Home = () => {

    const [category,setCategory] =useState(0);
  return (
    <>
      <Sidebar category={category} setCategory={setCategory}/>
      <TitleContent category={category} setCategory={setCategory}/>
      <Feed category={category}/>
    </>
  )
}

export default Home
