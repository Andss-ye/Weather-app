import Layout from "./Layout";
import Weather from "./Weather";
import Forecasd from "./Forecasd";
import { useEffect, useState } from "react";
import { getUserLocation } from "./Location";
import { fetchWeatherData } from "./Api";

function App() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const getWeather = async () => {
      try {
        const location = await getUserLocation();
        const data = await fetchWeatherData(location.lat, location.lon);
        setWeatherData(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    getWeather();
  }, []);

  return (
    <Layout>
      <Weather weatherData={weatherData} />
      <Forecasd weatherData={weatherData}/>
    </Layout>
  )
}

export default App;
