const API_KEY = '2cf2007aeafa7a392f189b2b8ce7c7cf';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const fetchWeather = async (city) => {
  const response = await fetch(`${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`);
  if (!response.ok) throw new Error('Error fetching weather data');
  return await response.json();
};

export const fetchForecast = async (city) => {
  const response = await fetch(`${BASE_URL}/forecast/daily?q=${city}&cnt=8&appid=${API_KEY}&units=metric`);
  if (!response.ok) throw new Error('Error fetching forecast data');
  return await response.json();
};
