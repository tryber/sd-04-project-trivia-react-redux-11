import { CHOOSE_ANSWER, NEXT_BUTTON } from '../action';

const INITIAL_STATE = {
  answerType: null,
  selected: 0,
  isAnswered: false,
  feedback: false,
};

const answers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHOOSE_ANSWER:
      return { ...state, answerType: action.answerType, isAnswered: true };
    case NEXT_BUTTON:
      if (state.selected === 4) return { ...state, feedback: true };
      return { ...state, isAnswered: false, selected: state.selected + 1 };
    default:
      return state;
  }
};

export default answers;
