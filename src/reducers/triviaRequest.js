import {
  REQUEST_API,
  REQUEST_API_FAILURE,
  REQUEST_API_SUCCESS,
} from '../action';

const INITIAL_STATE = {
  triviaData: [],
  loading: false,
};

const triviaRequest = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_API:
      return { ...state, loading: true };
    case REQUEST_API_FAILURE:
      return { ...state, loading: false, error: action.error };
    case REQUEST_API_SUCCESS:
      return { ...state, loading: false, triviaData: action.data.results };
    default:
      return state;
  }
};

export default triviaRequest;
