import { weatherApiSecretKey ***REMOVED*** from './secrets.js'

const appId = `&appid=${weatherApiSecretKey()***REMOVED***`

function handleError (error) {
  console.warn(error);
  return null;
***REMOVED***

export async function fetchWeather (locale) {
  const encodedURI = window.encodeURI(`https://api.openweathermap.org/data/2.5/forecast?q=${locale***REMOVED***${appId***REMOVED***`);

  const response = await fetch(encodedURI)
    .catch(handleError);

  const weather = await response.json()

  return weather
***REMOVED***
