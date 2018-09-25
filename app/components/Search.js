import React from 'react'

class Search extends React.Component {
  state = {
    locale: ''
  ***REMOVED***
  handleChange = (event) => {
    const locale = event.target.value
    this.setState({ locale ***REMOVED***)
  ***REMOVED***
  render() {
    const { locale ***REMOVED*** = this.state

    return (
      <form className="form-inline">
        <input
          id='location'
          className='form-control mr-sm-2'
          type='search'
          value={locale***REMOVED***
          autoComplete='off'
          placeholder='ex: San Antonio, TX'
          aria-label='Get Weather'
          onChange={this.handleChange***REMOVED***
        />
        <button
          className='btn btn-success my-2 my-sm-0'
          type='submit'
          disabled={!locale***REMOVED***>
            Get Weather
        </button>
      </form>
    )
  ***REMOVED***
***REMOVED***

export default Search
