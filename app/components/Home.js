import React from 'react'
import Search from './Search'

class Home extends React.Component {
  render() {
    return (
      <div className='home-bg' style={{backgroundImage: "url('app/images/pattern.svg')"}}>
        <div>
          <h1>Enter a City and State</h1>
          <Search />
        </div>
      </div>
    )
  }
}

export default Home
