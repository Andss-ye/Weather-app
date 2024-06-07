import SunIcon from './icons/SunIcon';
import CloudIcon from './icons/CloudIcon';
import CloudRainIcon from './icons/CloudRainIcon';

export const getWeatherIcon = (condition: any) => {
  if (condition.includes('Sunny')) {
    return <SunIcon className="h-16 w-16 text-yellow-500" />;
  } else if (condition.includes('cloudy')) {
    return <CloudIcon className="h-16 w-16 text-gray-500 dark:text-gray-400" />;
  } else if (condition.includes('Rain')) {
    return <CloudRainIcon className="h-16 w-16 text-blue-500" />;
  } else {
    return null; // Manejar otras condiciones si es necesario
  }
};
