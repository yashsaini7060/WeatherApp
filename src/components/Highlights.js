import React from 'react';
import {getTime, aqiText} from '../helper/module';
function Highlights({currWeather, airPollution}) {
  
  const {
    main: { feels_like, pressure, humidity },
    sys: { sunrise: sunriseUnixUTC, sunset: sunsetUnixUTC },
    timezone,
    visibility,
  } = currWeather;

  const [{
    main: { aqi },
    components: { no2, o3, so2, pm2_5 }
  }] = airPollution.list;

  return (
    <div className="highlights-list">
      <div className="card card-sm highlight-card one">
        <h3 className="title-3">Air Quality Index</h3>
        <div className="wrapper">
          <span className="m-icon">air</span>
          <ul className="card-list">
            <li className="card-item">
              <p className="title-1">{pm2_5.toPrecision(3)}</p>
              <p className="label-1">PM <sub>2.5</sub></p>
            </li>
            <li className="card-item">
              <p className="title-1">{so2.toPrecision(3)}</p>
              <p className="label-1">SO<sub>2</sub></p>
            </li>
            <li className="card-item">
              <p className="title-1">{no2.toPrecision(3)}</p>
              <p className="label-1">NO<sub>2</sub></p>
            </li>
            <li className="card-item">
              <p className="title-1">{o3.toPrecision(3)}</p>
              <p className="label-1">O<sub>3</sub></p>
            </li>
          </ul>
        </div>

        <span className={`badge aqi-${aqi} label-${aqi}`} title={aqiText[aqi].message}>{aqiText[aqi].level}</span>
      </div>

      <div className="card card-sm highlight-card two">
        <h3 className="title-3">Sunrise & Sunset</h3>

        <div className="card-list">
          <div className="card-item">
            <span className="m-icon">clear_day</span>
            <div>
              <p className="label-1">Sunrise</p>
              <p className="title-1">{getTime(sunriseUnixUTC, timezone)}</p>
            </div>
          </div>

          <div className="card-item">
            <span className="m-icon">clear_night</span>
            <div>
              <p className="label-1">Sunset</p>
              <p className="title-1">{getTime(sunsetUnixUTC, timezone)}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="card card-sm highlight-card">
        <h3 className="title-3"> Humidity </h3>
        <div className="wrapper">
          <span className="m-icon">humidity_percentage</span>
          <p className="title-1">{humidity}<sub>%</sub></p>
        </div>
      </div>

      <div className="card card-sm highlight-card">
        <h3 className="title-3">Pressure</h3>
        <div className="wrapper">
          <span className="m-icon">airwave </span>
          <p className="title-1">{pressure}<sub>hPa</sub></p>
        </div>
      </div>

      <div className="card card-sm highlight-card">
        <h3 className="title-3">Visibility</h3>
        <div className="wrapper">
          <span className="m-icon">visibility</span>
          <p className="title-1">{visibility/ 1000}<sub>Km</sub></p>
        </div>
      </div>

      <div className="card card-sm highlight-card">
        <h3 className="title-3">Feels Like</h3>
        <div className="wrapper">
          <span className="m-icon">thermostate</span>
          <p className="title-1">{parseInt(feels_like)}&deg;<sup>c</sup></p>
        </div>
      </div>
    </div>
  )
}

export default Highlights;