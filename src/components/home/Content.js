import React from 'react'
import { About } from './About'
import { Intro } from './Intro'
import { Service } from './Service'


export const Content = () => {
  return (
    <div className="content-container">
      <Intro />
      <About />
      <Service />
    </div>
  )
}
