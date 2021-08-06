import React from 'react'

export const NavBar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-logo-container">
        <img src="../assets/logo.png" alt="logo" />
      </div>
      <div className="navbar-options-container">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Service</li>
          <li>Works</li>
          <li>News</li>
          <li>Contact</li>
          <div className="navbar-options-last pointer">
            <li>Get A Quote</li>
          </div>
        </ul>
      </div>
      <div className="navbar-icons-container">
        <img src="./assets/icons/facebook.svg" alt="facebook" />
        <img src="./assets/icons/twitter.svg" alt="twitter" />
        <img src="./assets/icons/youtube.svg" alt="youtube" />
        <img src="./assets/icons/instagram.svg" alt="instagram" />
      </div>
    </div>
  )
}
