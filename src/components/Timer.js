import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { timerInit, timerOver } from '../action';

const initialState = ({ time: 30 });

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.timerStart = this.timerStart.bind(this);
    this.timerStop = this.timerStop.bind(this);
  }
  componentDidUpdate() {
    const { time } = this.state;
    const { timeOn } = this.props;
    if (timeOn && time > 0) {
      this.timerStart();
    } else if (time === 0) {
      this.timerStop();
    }
  }

  timerStart() {
    const { time } = this.state;
    setTimeout(() => {
      this.setState({ time: time - 1 });
    }, 1000);
  }

  timerStop() {
    const { timeOver } = this.props;
    timeOver(false, false);
    return this.setState(initialState);
  }

  render() {
    const { time } = this.state;
    const { timerInit, timeOn } = this.props;
    return (
      <div>
        {time}
        <button onClick={() => timerInit(!timeOn)}>ON/OFF</button>
      </div >
    );
  }
}
const mapStateToProps = (state) => ({
  timeOn: state.timer.timeOn,
  timeOver: state.timer.timeOver,
});

const mapDispatchToProps = (dispatch) => ({
  timerInit: (e) => dispatch(timerInit(e)),
  timerOver: (e) => dispatch(timerOver(e)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Timer);

Timer.propTypes = {
  timerOver: PropTypes.func.isRequired,
  timerInit: PropTypes.func.isRequired,
  timeOn: PropTypes.bool.isRequired,
  timeOver: PropTypes.bool.isRequired,
  fecthAPI: PropTypes.string.isRequired,
};
