import React from 'react'

export const NavBar = () => {
  return (
    <div>
      <div>
        <img src="../assets/logo.png" alt="logo" />
      </div>
      <div>
        <ul>
          <li>Home</li>
          <li>Aboute</li>
          <li>Service</li>
          <li>Works</li>
          <li>News</li>
          <li>Contact</li>
          <li>Get a Quote</li>
        </ul>
      </div>
      <div className="navbar-icons-container">
        <img src="../assets/icons/facebook.svg" alt="facebook" />
        <img src="../assets/icons/twitter.svg" alt="twitter" />
        <img src="./assets/icons/youtube.svg" alt="youtube" />
        <img src="./assets/icons/instagram.svg" alt="instagram" />
      </div>
    </div>
  )
}
