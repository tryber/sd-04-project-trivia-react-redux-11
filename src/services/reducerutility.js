const updateTimer = (state, isAnsweredState, timerState) => {
  if (!isAnsweredState) {
    return {
      ...state,
      isAnswered: timerState === 0,
      timer: timerState === 0 ? 0 : timerState - 1,
    };
  }
  return state;
};

export default updateTimer;
