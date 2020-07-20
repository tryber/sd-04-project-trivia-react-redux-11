import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { timerInit, timerOver } from '../action';

const initialState = { time: 30 };

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.timerStart = this.timerStart.bind(this);
    this.timerStop = this.timerStop.bind(this);
    this.timerReset = this.timerReset.bind(this);
  }

  componentDidMount() {
    const { timerInitProps } = this.props;
    timerInitProps(true);
  }

  componentDidUpdate() {
    const { time } = this.state;
    const { timeOn } = this.props;
    if (timeOn && time > 0) {
      this.timerStart();
    }
    if (time === 0) {
      this.timerStop();
    }
    if (time !== 0 && time < 30 && !timeOn) {
      this.timerReset();
    }
  }

  timerReset() {
    this.setState(initialState);
  }

  timerStart() {
    const { time } = this.state;
    setTimeout(() => {
      this.setState({ time: time - 1 });
    }, 200);
  }

  async timerStop() {
    const { timerOverProps } = this.props;
    timerOverProps(true, false);
  }

  render() {
    const { time } = this.state;
    return <div>{time}</div>;
  }
}
const mapStateToProps = (state) => ({
  timeOn: state.answers.timer.timeOn,
  timeOver: state.answers.timer.timeOver,
  isAnswered: state.answers.isAnswered,
});

const mapDispatchToProps = (dispatch) => ({
  timerInitProps: (e) => dispatch(timerInit(e)),
  timerOverProps: (e) => dispatch(timerOver(e)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Timer);

Timer.propTypes = {
  timeOn: PropTypes.bool.isRequired,
  timerInitProps: PropTypes.func.isRequired,
  timerOverProps: PropTypes.func.isRequired,
};
