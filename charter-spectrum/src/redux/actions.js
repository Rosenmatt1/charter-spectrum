import { CHOSEN_STATE,  } from './actionTypes.js';

export const chosenState = ( data ) => ({
  type: CHOSEN_STATE,
  payload: data
});

