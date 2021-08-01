import React from 'react'
import { Cards } from './introComponents/Cards'

export const Intro = () => {
  return (
    <div className="intro-container">
      <div>
        <div className="intro-text">
          <h2>Build trust first</h2>
          <p>Control your business with a single tap</p>
        </div>
        <div className="cards-container">
          <Cards 
            asset={'007-anchor.png'} 
            title={'Complete business Control'}
            description={'Pore et dolore magna aliqua. Ut enim ad minim veniam, quis nos trud exerci tation '}
            border={'pink'}
          />
          <Cards 
            asset={'009-archive.png'} 
            title={'Critical analytics and report'}
            description={'Pore et dolore magna aliqua. Ut enim ad minim veniam, quis nos trud exerci tation '}
            border={'green'}
          />
          <Cards 
            asset={'199-user.png'} 
            title={'User satisfaction guarranted'}
            description={'Pore et dolore magna aliqua. Ut enim ad minim veniam, quis nos trud exerci tation '}
            border={'yellow'}
          />
        </div>
      </div>
    </div>
  )
}
