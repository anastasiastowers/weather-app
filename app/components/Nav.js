import React from 'react'
import Search from './Search'
import { Link } from 'react-router-dom'

class Nav extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <Link className='navbar-brand' to='/'>Weather App</Link>
        <Search />
      </nav>
    )
  }
}

export default Nav
