import { combineReducers } from 'redux';
import login from './login';
import tokenRequest from './tokenRequest';
import triviaRequest from './triviaRequest';

export default combineReducers({ login, tokenRequest, triviaRequest });
