import { combineReducers } from 'redux';
import login from './login';
import apiRequest from './apiRequest';
import answers from './answers';
import updateReducer from './updateReducer'

export default combineReducers({ login, apiRequest, answers, updateReducer });
