import { getWeatherIcon } from "./WeatherIcon";
import { format } from "date-fns";

const Weather = ({ weatherData }) => {
  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const currentDate = new Date(); // Obtiene la fecha actual del sistema del usuario
  const formattedDate = currentDate.toLocaleDateString();

  return (
    <div className="bg-zinc-300 rounded-lg shadow-md p-10">
      <div className="flex items-center">
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-1.5">{weatherData.timezone}</h2>
          <p className="text-gray-500 dark:text-gray-400">
            Today, {formattedDate}
          </p>
        </div>
        <div className="flex flex-col items-end">
          {getWeatherIcon(weatherData.currentConditions.conditions)}
          <span className="text-4xl font-bold">
            {weatherData.currentConditions.temp}° C
          </span>
          <span className="text-gray-500 dark:text-gray-400">
            {weatherData.currentConditions.conditions}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Weather;
