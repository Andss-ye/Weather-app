import { getWeatherIcon } from "./WeatherIcon";

const Forecasd = ({ weatherData }) => {
  if (!weatherData || !weatherData.days) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-zinc-300 rounded-lg shadow-md p-8">
      <h2 className="text-2xl font-bold mb-4">Forecast</h2>

      <div className="grid grid-cols-3 gap-4">
        {weatherData.days.slice(2, 5).map((day: any, index: number) => (
          <div key={index} className="flex flex-col items-center">
            <p className="text-gray-500 dark:text-gray-400">
              {new Date(day.datetime).toLocaleDateString(undefined, {
                weekday: "short",
                month: "short",
                day: "numeric",
              })}
            </p>
            {getWeatherIcon(weatherData.currentConditions.conditions)}
            <span className="text-xl font-bold">{day.temp}°C</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecasd;
