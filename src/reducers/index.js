import { combineReducers } from 'redux';
import login from './login';
import apiRequest from './apiRequest';

export default combineReducers({ login, apiRequest });
