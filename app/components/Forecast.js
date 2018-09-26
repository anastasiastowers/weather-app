import React from 'react'
import Loading from './Loading'
import queryString from 'query-string'
import { fetchWeather ***REMOVED*** from '../utils/api'

class WeatherGrid extends React.Component {
  render() {
    console.log(this.props.forecast)
    return (
      <div>Wow Weather in {this.props.forecast.city.name***REMOVED***</div>
    )
  ***REMOVED***
***REMOVED***

const parseLocale = props => queryString.parse(props.location.search)

class Forecast extends React.Component {
  state = {
    forecast: null,
    isLoading: true
  ***REMOVED***

  setWeather = async () => {
    this.setState({ isLoading: true ***REMOVED***)
    const { locale ***REMOVED*** = parseLocale(this.props)
    const forecast = await fetchWeather(locale)
    this.setState({ isLoading: false, forecast: forecast ***REMOVED***)
  ***REMOVED***

  componentDidMount() {
    this.setWeather()
  ***REMOVED***

  componentDidUpdate(prevProps) {
    const { locale ***REMOVED*** = parseLocale(this.props)
    const { locale: prevLocale ***REMOVED*** = parseLocale(prevProps)

    if(locale != prevLocale) {
      this.setWeather()
    ***REMOVED***
  ***REMOVED***

  render() {
    return (
      <div>
        {this.state.isLoading
          ? <Loading />
          : <WeatherGrid forecast={this.state.forecast***REMOVED*** />***REMOVED***
      </div>
    )
  ***REMOVED***
***REMOVED***

export default Forecast
