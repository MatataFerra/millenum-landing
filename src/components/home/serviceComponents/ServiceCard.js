import React from 'react'

export const ServiceCard = ({order}) => {
  return (
    <div className={ 
                    order 
                    ? `serviceCard-container serviceCard-order--${order}` 
                    : 'serviceCard-container'
    }>
      <img className="serviceCard-icon" src="assets/services/squares.svg" alt="Square" />
      <p className="serviceCard-title">Business Automation</p>
      <p className="serviceCard-description">Pore et dolore magna aliqua. Ut enim ad minim veniam, quis nos trud exerci tation</p>
      <img className="serviceCard-arrow" src="assets/services/right-arrow.svg" alt="Arrow" />
    </div>
  )
}
