import { weatherApiSecretKey } from './secrets.js'

const appId = `&appid=${weatherApiSecretKey()}`

function handleError (error) {
  console.warn(error);
  return null;
}

export async function fetchForecast (locale) {
  const encodedURI = window.encodeURI(`https://api.openweathermap.org/data/2.5/forecast?q=${locale}${appId}`);

  const response = await fetch(encodedURI)
    .catch(handleError);

  const forecast = await response.json()

  return forecast
}

export async function fetchCurrentWeather (locale) {
  const encodedURI = window.encodeURI(`https://api.openweathermap.org/data/2.5/weather?q=${locale}${appId}`);

  const response = await fetch(encodedURI)
    .catch(handleError);

  const weather = await response.json()

  return weather
}
