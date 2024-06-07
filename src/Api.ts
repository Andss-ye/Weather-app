export const fetchWeatherData = async (lat: number, lon: number) => {
    const apiKey = 'S2HEYFKEUWTGTXZ8A5MG49ELJ';
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat},${lon}?unitGroup=metric&key=${apiKey}&contentType=json`;
  
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };
  