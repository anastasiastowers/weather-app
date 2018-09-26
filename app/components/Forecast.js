import React from 'react'
import Loading from './Loading'
import queryString from 'query-string'
import { fetchWeather } from '../utils/api'

class WeatherGrid extends React.Component {
  render() {
    console.log(this.props.forecast)
    return (
      <div>Wow Weather in {this.props.forecast.city.name}</div>
    )
  }
}

const parseLocale = props => queryString.parse(props.location.search)

class Forecast extends React.Component {
  state = {
    forecast: null,
    isLoading: true
  }

  setWeather = async () => {
    this.setState({ isLoading: true })
    const { locale } = parseLocale(this.props)
    const forecast = await fetchWeather(locale)
    this.setState({ isLoading: false, forecast: forecast })
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
          : <WeatherGrid forecast={this.state.forecast} />}
      </div>
    )
  }
}

export default Forecast
