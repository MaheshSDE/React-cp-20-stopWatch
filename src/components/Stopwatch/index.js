// Write your code here
// Write your code here
import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {isTimerRunning: false, timeElapsedInSeconds: 0}

  onStart = () => {
    this.timerId = setInterval(this.tick, 1000)
    this.setState({isTimerRunning: true})
  }

  tick = () => {
    this.setState(prevState => ({
      timeElapsedInSeconds: prevState.timeElapsedInSeconds + 1,
    }))
  }

  onStop = () => {
    clearInterval(this.timerId)
    this.setState({isTimerRunning: false})
  }

  onReset = () => {
    clearInterval(this.timerId)
    this.setState({isTimerRunning: false, timeElapsedInSeconds: 0})
  }

  render() {
    const {isTimerRunning, timeElapsedInSeconds} = this.state

    const minutes = Math.floor(timeElapsedInSeconds / 60)
    const seconds = Math.floor(timeElapsedInSeconds % 60)

    const mints = minutes > 9 ? minutes : `0${minutes}`
    const sec = seconds > 9 ? seconds : `0${seconds}`

    return (
      <div className="bg-container">
        <h1 className="heading">Stopwatch</h1>
        <div className="watch-container">
          <div className="timer-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="stopWatchImg"
            />
            <p className="timerHeading">Timer</p>
          </div>
          <h1 className="timer">
            {mints}:{sec}
          </h1>
          <div className="button-container">
            <button
              type="button"
              className="start-button"
              onClick={this.onStart}
              disabled={isTimerRunning}
            >
              Start
            </button>
            <button type="button" className="stop-button" onClick={this.onStop}>
              Stop
            </button>
            <button
              type="button"
              className="reset-button"
              onClick={this.onReset}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
