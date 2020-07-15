import fecthFunction from '../services/fetchFunction';

export const ON_CHANGE = 'ON_CHANGE';
export const REQUEST_API = 'REQUEST_API';
export const REQUEST_API_SUCCESS = 'REQUEST_API_SUCCESS';
export const REQUEST_API_FAILURE = 'REQUEST_API_FAILURE';

export const onChange = (name, value) => ({
  type: ON_CHANGE,
  name,
  value,
});

const requestAPI = () => ({
  type: REQUEST_API,
});

const requestAPISuccess = (json) => ({
  type: REQUEST_API_SUCCESS,
  data: json,
});

const requestAPIFailure = (error) => ({
  type: REQUEST_API_FAILURE,
  error,
});

export const getAPI = (url) => (dispatch) => {
  dispatch(requestAPI());
  return fecthFunction(url).then(
    (trivia) => dispatch(requestAPISuccess(trivia)),
    (error) => dispatch(requestAPIFailure(error)),
  );
};
