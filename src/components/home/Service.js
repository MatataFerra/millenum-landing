import React from 'react'
import { ServiceCard } from './serviceComponents/ServiceCard'

export const Service = () => {
  return (
    <div className="container service-container">
      <div className="service-title-container">
        <div className="service-flex-item">
          <h2>What we Do</h2>
          <p>Service to solve all kinds of business problem</p>
        </div>
      </div>
      <div className="service-container-card">
        <ServiceCard icon={'squares'} title={'Business Automation'}/>
        <ServiceCard order={'2'} icon={'shopping-cart'} title={'Ecommerce Support'}/>
        <ServiceCard order={'3'} icon={'video-camera'} title={'Video Production'}/>
        <ServiceCard order={'4'} icon={'headphones'} title={'Realtime Support'}/>
        <ServiceCard order={'5'} icon={'placeholder'} title={'Location Marking'}/>
        <ServiceCard order={'6'} icon={'upload'} title={'File Upload Protocol'}/>
      </div>
    </div>
  )
}
