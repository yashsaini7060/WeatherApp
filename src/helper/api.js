import axios from "axios";
const api_key ="92e22793faa0a44404e775685ced5d54";

export const fetchData = async function(URL){
  // fetch(`${URL}&appid=${api_key}`)
    try {
      const response = await axios.get(`${URL}&appid=${api_key}`)
      return response;
    } catch (error) {
      return {error: error.message}
    } 

}


export const url = {
  currentWeather(lat, lon){
    return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric`
  },
  forecast(lat, lon){
    return `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric`
  },
  airPollution(lat, lon){
    return `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}`
  },
  reverseGeo(lat, lon){
    return `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=5`
  },
  geo(query){
    return `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=10`
  }
}