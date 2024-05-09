import ListItem from "./ListItem";


function HourlyForecast({forecastWeather}) {
  const {
    list: forecastList,
    city: {timezone}
  } = forecastWeather;

  return (
    <>
      <ul className="slider-list" data-temp>
        {forecastList.slice(0, 8).map((item, index) => (
          <ListItem item={item} key={index} type="temp" timezone={timezone} />
        ))}
      </ul>

      <ul className="slider-list" data-wind>
        {forecastList.slice(0, 8).map((item, index) => (
          <ListItem item={item} key={index} type="wind" timezone={timezone} />
        ))}
      </ul>
    </>
  )
}

export default HourlyForecast;


