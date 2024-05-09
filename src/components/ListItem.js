import React from 'react';
import { WeatherIcons, getHours, mps_to_kmh } from '../helper/module';

const ListItem = ({ item, index, type, timezone }) => (
  <li className="slider-item" key={index}>
    <div className="card card-sm slider-card">
      {(type === 'temp' || type === 'wind') && (
        <>
          <p className="body-3">{getHours(item.dt, timezone)}</p>
          {type === 'temp'? (
            <img
              src={WeatherIcons[`${item.weather[0].icon}`]}
              alt={item.weather[0].description}
              width="48"
              height="48"
              loading="lazy"
              className="weather-icon"
              title={item.weather[0].description}
            />
          ) : (
            <img
              src={WeatherIcons.direction}
              alt="direction"
              width="48"
              height="48"
              loading="lazy"
              className="weather-icon"
              title=""
              style={{ transform: `rotate(${item.wind.deg - 180}deg)` }}
            />
          )}
          <p className="body-3">
            {type === 'temp'? `${parseInt(item.main.temp)}°` : `${parseInt(mps_to_kmh(item.wind.speed))} km/h`}
          </p>
        </>
      )}
    </div>
  </li>
);

export default ListItem;
