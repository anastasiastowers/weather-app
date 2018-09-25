import React from 'react'

class Home extends React.Component {
  render() {
    return (
      <div className='home-bg' style={{backgroundImage: "url('app/images/pattern.svg')"***REMOVED******REMOVED***>
        <form>
          <h1>Enter a City and State</h1>
          <input
            id='cityState'
            className='form-control'
            placeholder='ex: San Antonio, Texas'
            type='text'
            autoComplete='off'
          />
          <button
            className='btn btn-success d-block mx-auto'
            type='submit'>
              Get Weather
          </button>
        </form>
      </div>
    )
  ***REMOVED***
***REMOVED***

export default Home
