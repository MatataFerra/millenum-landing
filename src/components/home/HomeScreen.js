import React from 'react'
import { Hero } from './Hero'
import { Intro } from './Intro'
import { NavBar } from './NavBar'

export const HomeScreen = () => {
  return (
    <>
    <div className="home-container">
      <NavBar />
      <Hero />
    </div>
      <Intro />
      
    </>
  )
}
