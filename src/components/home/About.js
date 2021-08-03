import React from "react";

export const About = () => {
  return (
    <div className="about-container container">
      <img className="about-backgound-img" src="assets/about/objectback.png" alt="object on background" />
      <div className="about-content-container">

        <div className="about-text-container">
          <h2>Most innovative creative team</h2>
          <p>
            Pore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exerction
          </p>
          <article>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excep teur sint occae cat
            cupidatat non proident, sunt in culpa qui officia deser unt mollit
            anim id est laborum.
          </article>
          <div className="hero-button pointer">
            KNOW MORE
          </div>
        </div>

        <div className="about-img-container">
          <div className="about-img-clock" />
          <div className="about-img-people" />
          <img className="about-img-asset" src="assets/about/objectImg.svg" alt="clock" />
        </div>

      </div>
      
    </div>
  );
};
