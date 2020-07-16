import {
  REQUEST_API,
  REQUEST_API_FAILURE,
  REQUEST_API_SUCCESS,
  REQUEST_TOKEN_SUCCESS,
} from '../action';

const INITIAL_STATE = {
  token: '',
  triviaData: [],
  loading: false,
};

const apiRequest = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_API:
      return { ...state, loading: true };
    case REQUEST_API_FAILURE:
      return { ...state, loading: false, error: action.error };
    case REQUEST_TOKEN_SUCCESS:
      localStorage.setItem('token', action.token.token);
      return { ...state, loading: false, token: action.token.token };
    case REQUEST_API_SUCCESS:
      return {
        ...state,
        loading: false,
        triviaData: action.data.results,
      };
    default:
      return state;
  }
};

export default apiRequest;
