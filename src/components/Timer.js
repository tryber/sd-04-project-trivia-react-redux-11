import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setTimer, resetTimer } from '../action';

class Timer extends Component {
  componentDidMount() {
    console.log('mond');
    const {
      setTimerProps,
      resetTimerProps,
      actualTime,
      isAnswered,
    } = this.props;

    if (actualTime === 0) resetTimerProps();
    this.looper = setInterval(() => {
      if (isAnswered || actualTime === 0) resetTimerProps();
      setTimerProps();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.looper);
  }

  render() {
    const { actualTime } = this.props;
    return <div>{actualTime}</div>;
  }
}
const mapStateToProps = (state) => ({
  actualTime: state.answers.timer,
  isAnswered: state.answers.isAnswered,
});

const mapDispatchToProps = {
  setTimerProps: setTimer,
  resetTimerProps: resetTimer,
};

export default connect(mapStateToProps, mapDispatchToProps)(Timer);

Timer.propTypes = {
  actualTime: PropTypes.number.isRequired,
  setTimerProps: PropTypes.func.isRequired,
  resetTimerProps: PropTypes.func.isRequired,
};
