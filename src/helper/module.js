export const WeatherIcons = {
  "01d": require("../assets/images/weather_icons/01d.png"),
  "01n": require("../assets/images/weather_icons/01n.png"),
  "02d": require("../assets/images/weather_icons/02d.png"),
  "02n": require("../assets/images/weather_icons/02n.png"),
  "03d": require("../assets/images/weather_icons/03d.png"),
  "03n": require("../assets/images/weather_icons/03n.png"),
  "04d": require("../assets/images/weather_icons/04d.png"),
  "04n": require("../assets/images/weather_icons/04n.png"),
  "09d": require("../assets/images/weather_icons/09d.png"),
  "09n": require("../assets/images/weather_icons/09n.png"),
  "10d": require("../assets/images/weather_icons/10d.png"),
  "10n": require("../assets/images/weather_icons/10n.png"),
  "11d": require("../assets/images/weather_icons/11d.png"),
  "11n": require("../assets/images/weather_icons/11n.png"),
  "13d": require("../assets/images/weather_icons/13d.png"),
  "13n": require("../assets/images/weather_icons/13n.png"),
  "50d": require("../assets/images/weather_icons/50d.png"),
  "50n": require("../assets/images/weather_icons/50n.png"),
  "direction": require("../assets/images/weather_icons/direction.png")
};


export const weekDayNames =[
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thrusday",
  "Friday",
  "Saturday"
];

export const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
]
/**
 * 
 * @param {number} dateUnix Unix date in seconds
 * @param {number} timezone timezone shift from UTC in seconds
 * @returns {string} Date string format "Sunday 10, Jan"
 */
export const getDate = function (dateUnix, timezone){
  const data = new Date((dateUnix + timezone) * 1000);
  const weekDayName = weekDayNames[data.getUTCDay()];
  const monthName = monthNames[data.getUTCMonth()];
  return `${weekDayName} ${data.getUTCDate()}, ${monthName}`; 
}


/**
 * 
 * @param {number} timeUnix Unix date in seconds
 * @param {number} timezone Timezone shift from UTC in secs
 * @returns  {string} Time string format: "HH:MM AM/PM"
 */

export const getTime = function(timeUnix, timezone){
  const date = new Date((timeUnix + timezone)*1000);
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  const period = hours >= 12 ? "PM" : "AM";
  return `${hours % 12 || 12}:${minutes} ${period}`;
}

/**
 * 
 * @param {number} timeUnix Unix date in seconds
 * @param {number} timezone Timezone shift from UTC in secs
 * @returns  {string} Time string format: "HH AM/PM"
 */


export const getHours = function(timeUnix, timezone){
  const date = new Date((timeUnix + timezone)*1000);
  const hours = date.getUTCHours();
  const period = hours >= 12 ? "PM" : "AM";
  return `${hours % 12 || 12} ${period}`;
}

/**
 * 
 * @param {number} mps Metter per second 
 * @returns {number} Kilometer per hours
 */

export const mps_to_kmh = mps => {
  const mph = mps*3600;
  return mph/1000;
}

export const aqiText = {
  1:{
    level: "Good",
    message: "Air quality is considered satisfactory, and air pollution poses little or no risk",
  },
  2:{
    level: "Fair",
    message: "Air quality is acceptable: however, for some polltants there may be modrate health concern for a very small number of people who are unusually sensitive to air pollution."
  },
  3: {
    level: "Modrate",
    message: "Member of sensitive groups may experience health effects. The general public is not likely to be affected."
  },
  4:{
    level: "Poor",
    message: "Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects"
  },
  5: {
    level: "Very Poor",
    message: "Health warnings of emergency conditions. The entire population is more likely to be affected."
  }
}