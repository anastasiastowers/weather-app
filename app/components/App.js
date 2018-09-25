import React from 'react'
import { BrowserRouter as Router, Route, Switch ***REMOVED*** from 'react-router-dom'
import Home from './Home'
import Forecast from './Forecast'
import Nav from './Nav'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='content-wrapper'>
          <Nav />
          <Switch>
            <Route exact path='/' component={Home***REMOVED*** />
            <Route path='/forecast' component={Forecast***REMOVED*** />
            <Route render={() => <p>Not Found</p>***REMOVED*** />
          </Switch>
        </div>
      </Router>
    )
  ***REMOVED***
***REMOVED***

export default App
