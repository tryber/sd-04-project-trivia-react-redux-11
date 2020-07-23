import fetchFunction from '../../services/fetchFunction';

export const ON_CHANGE = 'ON_CHANGE';
export const REQUEST_API = 'REQUEST_API';
export const REQUEST_TOKEN_SUCCESS = 'REQUEST_TOKEN_SUCCESS';
export const REQUEST_API_SUCCESS = 'REQUEST_API_SUCCESS';
export const REQUEST_API_FAILURE = 'REQUEST_API_FAILURE';
export const SAVE_NAME_EMAIL = 'SAVE_NAME_EMAIL';
export const CHOOSE_ANSWER = 'CHOOSE_ANSWER';
export const NEXT_BUTTON = 'NEXT_BUTTON';
export const SET_TIMER = 'SET_TIMER';
export const RESET_TIMER = 'TIME_INIT';
export const SHOW_TIME = 'SHOW_TIME';
export const RESET_GAME = 'RESET_GAME';

export const onChange = (name, value) => ({
  type: ON_CHANGE,
  name,
  value,
});

const requestAPI = () => ({
  type: REQUEST_API,
});

const requestTokenSuccess = (token) => ({
  type: REQUEST_TOKEN_SUCCESS,
  token,
});

const requestAPISuccess = (trivia) => ({
  type: REQUEST_API_SUCCESS,
  data: trivia,
});

const requestAPIFailure = (error) => ({
  type: REQUEST_API_FAILURE,
  error,
});

export const getAPI = () => (dispatch) => {
  dispatch(requestAPI());
  return fetchFunction('https://opentdb.com/api_token.php?command=request').then(
    (token) => {
      dispatch(requestTokenSuccess(token));
      dispatch(requestAPI());
      return fetchFunction(`https://opentdb.com/api.php?amount=5&token=${token.token}`).then(
        (trivia) => dispatch(requestAPISuccess(trivia)),
        (error) => dispatch(requestAPIFailure(error)),
      );
    },
    (error) => dispatch(requestAPIFailure(error)),
  );
};

export const playButton = (name, email) => ({
  type: SAVE_NAME_EMAIL,
  name,
  email,
});

export const chooseAnswer = (answerType) => ({
  type: CHOOSE_ANSWER,
  answerType,
});

export const nextQuestion = () => ({
  type: NEXT_BUTTON,
});

export const setTimer = () => ({
  type: SET_TIMER,
});

export const resetTimer = () => ({
  type: RESET_TIMER,
});

export const resetGame = () => ({
  type: RESET_GAME,
});
