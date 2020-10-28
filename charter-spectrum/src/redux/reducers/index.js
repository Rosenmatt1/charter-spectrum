
import { combineReducers } from 'redux';
import chosenState from './chosenState';
import chosenGenre from './chosenGenre';
import stateActive from './stateActive';


export default combineReducers({ chosenState, chosenGenre, stateActive })