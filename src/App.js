import { useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import { fetchData, url } from "./helper/api";
import Loading from "./components/Loading";

function App() {
  const defaultCoordinates = {
    lat: 51.5073219,
    lon: -0.1276474
  };

  const [coordinates, setCoordinates] = useState(defaultCoordinates);
  const [loading, setLoading] = useState(false); // Changed initial state to false
  const [fetchingData, setFetchingData] = useState(false); // New state to track data fetching
  const [currWeather, setCurrWeather] = useState();
  const [forecastWeather, setForecastWeather] = useState();
  const [airPollution, setAirPollution] = useState();

  const setLocationCoordinates = (newcoordinates) => {
    setCoordinates(newcoordinates);
  };

  useEffect(() => {
    if (!fetchingData) {
      const fetchWeather = async () => {
        try {
          setFetchingData(true); // Set fetchingData to true before fetching
          const [result1, result2, result3] = await Promise.all([
            fetchData(url.currentWeather(coordinates.lat, coordinates.lon)),
            fetchData(url.forecast(coordinates.lat, coordinates.lon)),
            fetchData(url.airPollution(coordinates.lat, coordinates.lon))
          ]);

          setCurrWeather(result1.data);
          setForecastWeather(result2.data);
          setAirPollution(result3.data);
        } catch (error) {
          console.error("Error fetching weather data:", error);
        } finally {
          setFetchingData(false); // Set fetchingData back to false after fetching
        }
      };

      fetchWeather();
    }
  }, [coordinates, fetchingData]);

  useEffect(() => {
    setLoading(fetchingData); // Set loading state based on fetchingData
  }, [fetchingData]);

  return (
    <div>
      <Header setLocationCoordinates={setLocationCoordinates} />
      {loading ? (
        <Loading />
      ) : (
        <Main
          currWeather={currWeather}
          forecastWeather={forecastWeather}
          airPollution={airPollution}
        />
      )}
    </div>
  );
}

export default App;
