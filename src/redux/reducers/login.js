import { ON_CHANGE } from '../actions';

const INITIAL_STATE = {
  name: '',
  email: '',
};

const login = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ON_CHANGE:
      return { ...state, [action.name]: action.value };
    default:
      return state;
  }
};

export default login;
