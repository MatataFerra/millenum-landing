import React from 'react'
import { About } from './About'
import { Intro } from './Intro'
import { Portfolio } from './Portfolio'
import { Service } from './Service'


export const Content = () => {
  return (
    <div className="content-container">
      <Intro />
      <About />
      <Service />
      <Portfolio />
    </div>
  )
}
