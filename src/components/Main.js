import React from 'react';
import Footer from './Footer';
import CurrentWeather from './CurrentWeather';
import Forcast from './Forcast';
import Highlights from './Highlights';
import HourlyForecast from './Hourlyforecast';
function Main({currWeather, forecastWeather, airPollution}) {
  const forcastlist = forecastWeather?.list;
  console.log(currWeather);
  return (
    <main>
      <article className="container" data-container>
        <div className="content-left">
          {/* <!-- CURRENT WEATHER --> */}
          <CurrentWeather currWeather={currWeather} />

          {/* <!-- FORCAST --> */}

          <section
            className="section forecast"
            aria-labelledby="forecast-label"
            data-5-day-forcast
          >
            <h2 className="title-2" id="forecast-label">5 Days Forecast</h2>
            <div className="card card-lg forecast-card">
              <ul data-forecast-list>

                {forcastlist && Array(5).fill(0).map((_, i) => (
                  <Forcast key={i} data={forcastlist[i * 8 + 7]} />
                ))}
              </ul>
            </div>
          </section>

        </div>

        <div className="content-right">
          {/* <!-- HIGHLIGHTS --> */}
          <section className="section highlights" aria-labelledby="highlights-label" data-highlights>
            <div className='card card-lg'>
              <h2 className="title-2" id="highlights-label">Todays Highlights</h2>
              <Highlights currWeather={currWeather} airPollution={airPollution} />
            </div>
          </section>

          {/* <!-- HOURLY FORCAST --> */}

          <section className="section hourly-forcast" arial-label="hourly forecast" data-hourly-forcast>

            <h2 className="title-2">Today at</h2>
            <div className="slider-container">
              <HourlyForecast forecastWeather={forecastWeather}/>
            </div>
          </section>

          {/* <!---FOOTER--> */}
          <Footer />
        </div>


      </article>
    </main>
  )
}

export default Main