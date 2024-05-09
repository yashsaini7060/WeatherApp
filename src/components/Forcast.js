import React from 'react';
import { WeatherIcons } from '../helper/module';
import {weekDayNames, monthNames} from '../helper/module';


function Forcast({data}) {
  const date = new Date(data?.dt_txt);

  return (
    <li className='card-item'>
    <div className="icon-wrapper">
          <img
            src={WeatherIcons[`${data?.weather[0]?.icon}`]}
            width="36"
            height="36"
            alt={data?.weather[0]?.description}
            title={data?.weather[0]?.description}
            className="weather-icon"
          />

          <span className="span">
          <p className="title-2">{parseInt(data?.main?.temp)}&deg;</p>
          </span>
        </div>

        <p className="label-1">{date.getDate()} {monthNames[date.getUTCMonth()]}</p>
        <p className="label-1">{weekDayNames[date.getUTCDate()%4]}</p>
    </li>
  )
}

export default Forcast;

