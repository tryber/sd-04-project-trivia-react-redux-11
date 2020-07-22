import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setTime } from '../action';

class Timer extends Component {

  componentDidMount() {
    const { counter } = this.props;
    this.counterId = setInterval(() => counter(), 1000);
  }

  componentDidUpdate() {
    const { isAnswered, counter, timeOn } = this.props;
    if (isAnswered) {
      clearInterval(this.counterId);
    }
    if (timeOn && !isAnswered) {
      setTimeout(() => counter(), 1000);
    }
  }

  render() {
    const { time } = this.props;
    return (
      <div>{time}</div>
    );

  }
}

const mapStateToProps = (state) => ({
  time: state.answers.timer.time,
  timeOn: state.answers.timer.timeOn,
  isAnswered: state.answers.isAnswered,
});

const mapDispatchToProps = (dispatch) => ({
  counter: (e) => dispatch(setTime(e)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Timer);

Timer.propTypes = {
  counter: PropTypes.func.isRequired,
  isAnswered: PropTypes.bool.isRequired,
  timeOn: PropTypes.bool.isRequired,
  time: PropTypes.number.isRequired,

};
