import {
  CHOOSE_ANSWER,
  NEXT_BUTTON,
  TIMER_INIT,
  TIMER_OVER,
  SAVE_NAME_EMAIL,
  SHOW_TIME,
  SET_TIMER,
  RESET_TIMER,
} from '../action';
import { setLocal } from '../services/setGetLocalStorage';

const INITIAL_STATE = {
  player: { name: '', assertions: 0, score: 0, gravatarEmail: '' },
  answerType: null,
  selected: 0,
  isAnswered: false,
  feedback: false,
  timer: 30,
};

const answers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SAVE_NAME_EMAIL:
      setLocal('state', {
        player: {
          name: action.name,
          assertions: 0,
          score: 0,
          gravatarEmail: action.email,
        },
      });
      return {
        ...state,
        player: {
          ...state.player,
          name: action.name,
          assertions: 0,
          score: 0,
          gravatarEmail: action.email,
        },
      };
    case CHOOSE_ANSWER:
      return {
        ...state,
        answerType: action.answerType,
        isAnswered: true,
      };
    case NEXT_BUTTON:
      if (state.selected === 4) return { ...state, feedback: true };
      return {
        ...state,
        isAnswered: false,
        selected: state.selected + 1,
        timer: 30,
      };
    case SET_TIMER:
      if (!state.isAnswered)
        return {
          ...state,
          isAnswered: state.timer === 0 ? true : false,
          timer: state.timer === 0 ? 0 : state.timer - 1,
        };
      return state;
    case RESET_TIMER:
      return { ...state, timer: 30 };
    default:
      return state;
  }
};

export default answers;
