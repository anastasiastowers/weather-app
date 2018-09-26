import React from 'react'
import Search from './Search'

class Nav extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <a className="navbar-brand">Weather App</a>
        <Search />
      </nav>
    )
  }
}

export default Nav
