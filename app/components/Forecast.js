import React from 'react'
import Loading from './Loading'
import queryString from 'query-string'
import { fetchCurrentWeather, fetchForecast } from '../utils/api'

class WeatherGrid extends React.Component {
  render() {
    const { forecast, weather } = this.props
    console.log(forecast)
    console.log(weather)
    return (
      <div>
        <h1>{forecast.city.name}</h1>
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
