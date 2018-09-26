import { weatherApiSecretKey } from './secrets.js'

const appId = `&appid=${weatherApiSecretKey()}`

function handleError (error) {
  console.warn(error);
  return null;
}

export async function fetchWeather (locale) {
  const encodedURI = window.encodeURI(`https://api.openweathermap.org/data/2.5/forecast?q=${locale}${appId}`);

  const response = await fetch(encodedURI)
    .catch(handleError);

  const weather = await response.json()

  return weather
}
