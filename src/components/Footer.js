import React from 'react';
import openWeather from "../assets/images/openweather.png";
function Footer() {
  return (
    <footer className="footer">
      <p className="body-3">Copyright 2024 yashkumar. All Rights Reserved</p>

      <p className="body-3">
        Powered By
        <a href="https://openweathermap.org/api" title="Free OpenWeather Api" target="_blank" rel="noopener noreferrer" >
          <img src={openWeather} width="150" height="30" loading="lazy" alt="OpenWeather" />
        </a>
      </p>
    </footer>
  )
}

export default Footer;