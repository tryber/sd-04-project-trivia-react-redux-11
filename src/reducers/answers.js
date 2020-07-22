import {
  CHOOSE_ANSWER,
  NEXT_BUTTON,
  SAVE_NAME_EMAIL,
  SET_TIMER,
  RESET_TIMER,
} from '../action';
import { setLocal } from '../services/setGetLocalStorage';
import calculatePoints from '../services/calculatePoints';

const INITIAL_STATE = {
  answerType: null,
  difficulty: 1,
  feedback: false,
  isAnswered: false,
  player: { name: '', assertions: 0, score: 0, gravatarEmail: '' },
  ranking: [],
  selected: 0,
  timer: 30,
};
const player = (action) => ({
  name: action.name,
  assertions: 0,
  score: 0,
  gravatarEmail: action.email,
});

const answers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SAVE_NAME_EMAIL:
      setLocal('state', {
        player: player(action),
      });
      return {
        ...state,
        player: player(action),
      };
    case CHOOSE_ANSWER:
      return {
        ...state,
        answerType: action.answerType,
        isAnswered: true,
        player: {
          ...state.player,
          assertions:
            action.answerType === 'correct'
              ? state.player.assertions + 1
              : state.player.assertions,
          score: calculatePoints(
            action.answerType,
            state.timer,
            state.difficulty,
            state.player.score,
            state.player.assertions,
            state.player.name,
            state.player.gravatarEmail,
          ),
        },
      };
    case NEXT_BUTTON:
      if (state.selected === 4) {
        setLocal('ranking', [
          ...state.ranking,
          {
            name: state.player.name,
            score: state.player.score,
            picture: 'url-da-foto-no-gravatar',
          },
        ]);
        return {
          ...state,
          feedback: true,
          ranking: [
            ...state.ranking,
            {
              name: state.player.name,
              score: state.player.score,
              picture: 'url-da-foto-no-gravatar',
            },
          ],
        };
      }
      return {
        ...state,
        isAnswered: false,
        selected: state.selected + 1,
        timer: 30,
      };
    case SET_TIMER:
      return {
        ...state,
        isAnswered: (state.timer === 0) ? 'true' : 'false',
        timer: state.timer === 0 ? 0 : state.timer - 1,
      };
    case RESET_TIMER:
      return { ...state, timer: 30 };
    default:
      return state;
  }
};

export default answers;
