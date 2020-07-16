import { fetchToken, fetchTrivia } from '../services/fetchFunction';

export const ON_CHANGE = 'ON_CHANGE';
export const REQUEST_API = 'REQUEST_API';
export const REQUEST_TOKEN_SUCCESS = 'REQUEST_TOKEN_SUCCESS';
export const REQUEST_API_SUCCESS = 'REQUEST_API_SUCCESS';
export const REQUEST_API_FAILURE = 'REQUEST_API_FAILURE';
export const TIMER_INIT = 'TIMER_INIT';
export const TIMER_OVER = 'TIME_INIT';

export const timerInit = (timeOn) => ({
  type: TIMER_INIT,
  timeOn
})

export const timerOver = (timeOver, timeOn) => ({
  type: TIMER_OVER,
  timeOver,
  timeOn
})

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
  return fetchToken().then(
    (token) => {
      dispatch(requestTokenSuccess(token));
      dispatch(requestAPI());
      return fetchTrivia(token.token).then(
        (trivia) => dispatch(requestAPISuccess(trivia)),
        (error) => dispatch(requestAPIFailure(error)),
      );
    },
    (error) => dispatch(requestAPIFailure(error)),
  );
};
