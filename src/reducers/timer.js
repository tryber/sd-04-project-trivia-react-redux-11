import { TIMER_INIT, TIMER_OVER } from '../action';

const INITIAL_STATE = {
  timerOn: false,
  timeOver: false,
};

const timer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TIMER_INIT:
      return {
        ...state, timeOn: action.timeOn,
      };
    case TIMER_OVER:
      return {
        ...state, timeOver: action.timeOver, timeOn: action.timeOn,
      };
    default:
      return state;
  }
};

export default timer;
