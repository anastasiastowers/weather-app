import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
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
            <Route exact path='/' component={Home} />
            <Route path='/forecast' component={Forecast} />
            <Route render={() => <p>Not Found</p>} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
