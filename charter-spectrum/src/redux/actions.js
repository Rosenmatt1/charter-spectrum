import { CHOSEN_STATE } from './actionTypes.js';
import { CHOSEN_GENRE } from './actionTypes.js';


export const chosenState = ( data ) => ({
  type: CHOSEN_STATE,
  payload: data
});

export const chosenGenre = ( data ) => ({
  type: CHOSEN_GENRE,
  payload: data
});

