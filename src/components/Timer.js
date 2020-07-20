import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setTime } from '../action';


const Timer = ({ time, isAnswered, setTime }) => {
  let counter = null;

  // const timerCount = (time, isAnswered, counter, setTime) => {
  //   if (time > 0 && !isAnswered) {
  //     time -= 1;
  //     setTime(time);
  //   } else {
  //     return clearInterval(counter);
  //   }
  // };
  counter = setInterval(() => {
    time -= 1;
    setTime(time);
  }, 1000);

  if (time = 0 || isAnswered) {
    clearInterval(counter);
  }
  return (
    <div>{time}</div>
  );
};

const mapStateToProps = (state) => ({
  time: state.answers.timer.time,
  isAnswered: state.answers.isAnswered,
});

const mapDispatchToProps = (dispatch) => ({
  setTime: (e) => dispatch(setTime(e)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Timer);

Timer.propTypes = {
  timeOn: PropTypes.bool.isRequired,
  setTime: PropTypes.func.isRequired,
};
