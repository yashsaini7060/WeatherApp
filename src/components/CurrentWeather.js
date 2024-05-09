import React from 'react';
import { WeatherIcons } from '../helper/module';
import { getDate } from '../helper/module';

function CurrentWeather({currWeather}) {

  return (
    <section
      className="section current-weather"
      arial-label="current-weather"
      data-current-weather
    >
      <div className="card card-lg current-weather-card">
        <h2 className="title-2 card-title">Now</h2>

        <div className="wrapper">
          <p className="heading">{parseInt(currWeather?.main?.temp)}&deg;<sup>c</sup></p>

          <img
            src={WeatherIcons[`${currWeather?.weather[0]?.icon}`]}
            width="64"
            height="64"
            alt=""
            className="weather-icon"
          />
        </div>

        <p className="body-3">{currWeather?.weather[0]?.description}</p>

        <ul className="meta-list">
          <li className="meta-item">
            <span className="m-icon">calendar_today</span>
            <p className="title-3 meta-text">{getDate(currWeather?.dt, currWeather?.timezone)}</p>
          </li>
          <li className="meta-item">
            <span className="m-icon">location_on</span>
            <p className="title-3 meta-text">{currWeather?.name}, {currWeather?.sys?.country}</p>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default CurrentWeather;