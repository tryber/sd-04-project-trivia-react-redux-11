import { CHOOSE_ANSWER } from '../action';

const INITIAL_STATE = {
  answerType: null,
  selected: 0,
  isAnswered: false,
};

const answers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHOOSE_ANSWER:
      return { ...state, answerType: action.answerType, isAnswered: true };
    default:
      return state;
  }
};

export default answers;
