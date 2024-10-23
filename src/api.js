const API_KEY = 'API_KEY';
const BASE_URL = 'BASE_URL';

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
