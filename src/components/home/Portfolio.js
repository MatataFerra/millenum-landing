import React from 'react'
import { PortfolioJobs } from './portfolioComponent/PortfolioJobs'

export const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <div className="portfolio-text">
        <h2>Our Projects</h2>
        <p>Check the real innovation of problem solving</p>
      </div>
    <PortfolioJobs />
    </div>
  )
}
