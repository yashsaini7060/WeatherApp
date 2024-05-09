import { useEffect, useState } from "react";
import Header from "./components/Header"
import Main from "./components/Main"
import { fetchData, url } from "./helper/api";
import Loading from "./components/Loading";

function App() {
  const defaultCoordinates= {
    lat: 51.5073219,
    lon: -0.1276474
  }
  const [coordinates, setCoordinates] = useState(defaultCoordinates);
  const [loading, setLoading] = useState(true);
  const [currWeather, setCurrWeather] = useState();
  const [forecastWeather, setForecastWeather] = useState();
  const [airPollution, setAirPollution] = useState();

  const setLocationCoordinates = (newcoordinates) => {
    setCoordinates(newcoordinates);
  }

  const fetchWeather = async (coordinates) => {
    try {
      setLoading(true);
      const [result1, result2, result3] = await Promise.all([
        fetchData(url.currentWeather(coordinates?.lat, coordinates?.lon)),
        fetchData(url.forecast(coordinates?.lat, coordinates?.lon)),
        fetchData(url.airPollution(coordinates?.lat, coordinates?.lon)),
      ]);

      setCurrWeather(result1.data)
      setForecastWeather(result2.data)
      setAirPollution(result3.data)
      setLoading(false);
     
    } catch (error) {
    }
  };

  useEffect(() => {
    fetchWeather(coordinates);
  },[coordinates]);
  

  return (
    <div>
      <Header setLocationCoordinates={setLocationCoordinates}/>
      {loading ?  <Loading/> : <Main currWeather={currWeather} forecastWeather={forecastWeather} airPollution={airPollution}  />}
      

    </div>
  );
}

export default App;
