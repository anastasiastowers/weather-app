import React from 'react'
import Loading from './Loading'
import queryString from 'query-string'
import { fetchCurrentWeather, fetchForecast } from '../utils/api'

class WeatherGrid extends React.Component {
  convertToFahrenheit = kelvins => Math.round(1.8 * (kelvins - 273) + 32)

  groupByDate = (list, keyGetter) => {
    const currentDate = new Date(list[0].dt_txt).getDate()
    const map = new Map();

    list.forEach((item) => {
      const key = keyGetter(item).split(' ')[0];
      if (!map.has(key)) {
        map.set(key, [item]);
      } else {
        map.get(key).push(item);
      }
    });

    let array = []
    const addToArray = (value, key, map) => {
      array.push(value)
    }
    map.forEach(addToArray)

    return array;
  }

  calcHighTemp = (arr) => {
    const map = arr.map(function(o) { return o.main.temp });
    const kelvin = Math.max(...map)
    return this.convertToFahrenheit(kelvin)
  }

  calcLowTemp = (arr) => {
    const map = arr.map(function(o) { return o.main.temp });
    const kelvin = Math.min(...map)
    return this.convertToFahrenheit(kelvin)
  }

  groupBy = (list, keyGetter) => {
    const map = new Map();

    list.forEach((item) => {
      const key = keyGetter(item);
      if (!map.has(key)) {
        map.set(key, [item]);
      } else {
        map.get(key).push(item);
      }
    });

    return map
  }

  calcMostLikelyWeatherIcon = (arr) => {
    const groupedByWeatherIcon = this.groupBy(arr, arr => arr.weather[0].icon)
    let votes = []

    for (let [key, value] of groupedByWeatherIcon) {
      votes.push([key, value.length])
    }
    votes.sort((a, b) => b[1] - a[1]);

    return votes[0][0]
  }

  dailyForecast = forecast => {
    const datesBlockObject = this.groupByDate(forecast.list, forecastBlock => forecastBlock.dt_txt)

    let dayWeatherArray = []
    for(let i = 0; i < 5; i++) {
      const dayWeather = {
        date: datesBlockObject[i][0].dt_txt,
        highTemp: this.calcHighTemp(datesBlockObject[i]),
        lowTemp: this.calcLowTemp(datesBlockObject[i]),
        weatherIcon: this.calcMostLikelyWeatherIcon(datesBlockObject[i])
      }

      dayWeatherArray.push(dayWeather)
    }
    return dayWeatherArray
  }

  render() {
    const { forecast, weather } = this.props
    const dailyForecast = this.dailyForecast(forecast)
    return (
      <div className='container forecast mt-5'>
        <h1>{forecast.city.name}</h1>
        <div className='row justify-content-sm-center mt-3 mb-3'>
          <div className="card bg-light mb-3 col-sm-3">
            <div className="card-body">
              <h5 className="card-title">Current</h5>
              <p className="card-text">{this.convertToFahrenheit(weather.main.temp)}&deg;</p>
              <img src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} />
            </div>
          </div>
        </div>
        <div className='row'>
          {dailyForecast.map((dayForecast, index) => {
            const { date, lowTemp, highTemp, weatherIcon } = dayForecast
            const dateOptions = { weekday: 'long', month: 'short', day: 'numeric' }
            const displayDate = new Date(date).toLocaleDateString("en-US", dateOptions)
            return (
              <div className="card bg-light mb-3 col-lg" key={index}>
                <div className="card-body">
                  <h5 className="card-title">{displayDate}</h5>
                  <p className="card-text">{lowTemp}&deg; - {highTemp}&deg;</p>
                  <img src={`http://openweathermap.org/img/w/${weatherIcon}.png`} />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

const parseLocale = props => queryString.parse(props.location.search)

class Forecast extends React.Component {
  state = {
    forecast: null,
    weather: null,
    isLoading: true
  }

  setWeather = async () => {
    this.setState({ isLoading: true })
    const { locale } = parseLocale(this.props)
    const [ weather, forecast ] = await Promise.all([
      fetchCurrentWeather(locale),
      fetchForecast(locale)
    ])
    this.setState({ isLoading: false, weather: weather, forecast: forecast })
  }

  componentDidMount() {
    this.setWeather()
  }

  componentDidUpdate(prevProps) {
    const { locale } = parseLocale(this.props)
    const { locale: prevLocale } = parseLocale(prevProps)

    if(locale != prevLocale) {
      this.setWeather()
    }
  }

  render() {
    return (
      <div>
        {this.state.isLoading
          ? <Loading />
          : <WeatherGrid forecast={this.state.forecast} weather={this.state.weather} />}
      </div>
    )
  }
}

export default Forecast
