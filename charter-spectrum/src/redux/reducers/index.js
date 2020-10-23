
import { combineReducers } from 'redux';
import chosenState from './chosenState';
import chosenGenre from './chosenGenre';


export default combineReducers({ chosenState, chosenGenre })