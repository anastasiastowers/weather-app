import React from 'react'
import { Link, withRouter } from 'react-router-dom'

class Search extends React.Component {
  state = {
    locale: ''
  }
  handleSubmit = (event) => {
    event.preventDefault()
    const { locale } = this.state

    this.props.history.push(`/forecast?locale=${locale}`)
  }
  handleChange = (event) => {
    const locale = event.target.value
    this.setState({ locale })
  }
  render() {
    const { locale } = this.state

    return (
      <form className="form-inline" onSubmit={this.handleSubmit}>
        <input
          id='location'
          className='form-control mr-sm-2'
          type='search'
          value={locale}
          autoComplete='off'
          placeholder='ex: San Antonio, TX'
          aria-label='Get Weather'
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
        <button
          className='btn btn-success my-2 my-sm-0'
          type='submit'
          disabled={!locale}>
            Get Weather
        </button>
      </form>
    )
  }
}

export default withRouter(Search)
