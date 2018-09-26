import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  content: {
    textAlign: 'center',
    fontSize: '35px'
  ***REMOVED***
***REMOVED***

class Loading extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    speed: PropTypes.number.isRequired
  ***REMOVED***
  static defaultProps = {
    text: 'Loading',
    speed: 300
  ***REMOVED***
  state = {
    text: this.props.text
  ***REMOVED***
  componentDidMount() {
    const { text, speed ***REMOVED*** = this.props
    let stopper = `${text***REMOVED***...`

    this.interval = window.setInterval(() => {
      this.state.text === stopper
        ? this.setState(() => ({ text: this.props.text ***REMOVED***))
        : this.setState( prevState => ({ text: prevState.text + '.' ***REMOVED***))
    ***REMOVED***, speed);
  ***REMOVED***
  componentWillUnmount() {
    window.clearInterval(this.interval);
  ***REMOVED***
  render() {
    return (
      <p style={styles.content***REMOVED***>
        {this.state.text***REMOVED***
      </p>
    )
  ***REMOVED***
***REMOVED***

export default Loading
