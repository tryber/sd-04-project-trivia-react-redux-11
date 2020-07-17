import { CHOOSE_ANSWER, NEXT_BUTTON, TIMER_INIT, TIMER_OVER } from '../action';

const INITIAL_STATE = {
  answerType: null,
  selected: 0,
  isAnswered: false,
  feedback: false,
  timer: { timerOn: false, timeOver: false },
};

const answers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHOOSE_ANSWER:
      return {
        ...state,
        answerType: action.answerType,
        isAnswered: true,
        timer: ({ ...state.timer, timeOn: false, timeOver: true }),
      };
    case NEXT_BUTTON:
      if (state.selected === 4) return { ...state, feedback: true };
      return {
        ...state,
        isAnswered: false,
        selected: state.selected + 1,
        timer: { ...state.timer, timeOn: true, timeOver: false },
      };
    case TIMER_INIT:
      return { ...state, timer: { ...state.timer, timeOn: true } };
    case TIMER_OVER:
      return {
        ...state,
        isAnswered: true,
        timer: { ...state.timer, timeOver: true, timeOn: false },
      };
    default:
      return state;
  }
};

export default answers;
