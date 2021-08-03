import React from 'react'
import { Content } from './Content'
import { Hero } from './Hero'
import { NavBar } from './NavBar'

export const HomeScreen = () => {
  return (
    <>
    <div className="home-container">
      <NavBar />
      <Hero />
    </div>
      <Content />
    </>
  )
}
