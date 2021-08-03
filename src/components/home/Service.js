import React from 'react'
import { ServiceCard } from './serviceComponents/ServiceCard'

export const Service = () => {
  return (
    <div className="container">
      <div>
        <p>What we Do</p>
        <h2>Service to solve all kinds of business problem</h2>
      </div>
      <div className="service-container-card">
        <ServiceCard />
        <ServiceCard order={'2'}/>
        <ServiceCard order={'3'}/>
        <ServiceCard order={'4'}/>
        <ServiceCard order={'5'}/>
        <ServiceCard order={'6'} />
      </div>
    </div>
  )
}
