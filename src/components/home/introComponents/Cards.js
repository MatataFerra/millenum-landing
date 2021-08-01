import React from 'react'

export const Cards = ({asset, title, description, border}) => {
  return (
    <div className={`card-element-container card-border-${border}`}>
      <img src={`./assets/intro/${asset}`} alt="Anchor" />
      <p className="card-title">{title}</p>
      <p className="card-description">{description}</p> 
    </div>
  )
}
