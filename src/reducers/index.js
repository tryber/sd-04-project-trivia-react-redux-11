import { combineReducers } from 'redux';
import login from './login';
import apiRequest from './apiRequest';
import timer from './timer';

export default combineReducers({ login, apiRequest, timer });
