import { CHOOSE_ANSWER, NEXT_BUTTON, SET_TIME } from '../action';

const INITIAL_STATE = {
  answerType: null,
  selected: 0,
  isAnswered: false,
  feedback: false,
  timer: { time: 30 },
  nextQuestion: false,
};

const answers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHOOSE_ANSWER:
      return {
        ...state,
        answerType: action.answerType,
        isAnswered: true,
        timer: { ...state.timer, timeOn: true },
      };
    case NEXT_BUTTON:
      if (state.selected === 4) return { ...state, feedback: true };
      return {
        ...state,
        isAnswered: false,
        selected: state.selected + 1,
        timer: { timeOn: true, time: 30 },
      };
    case SET_TIME:
      console.log(state.timer.time);
      return {
        ...state,
        timer: {
          ...state.timer, time: state.timer.time === 0 ? 0 : state.timer.time - 1,
        },
      };

    default:
      return state;
  }
};

export default answers;
