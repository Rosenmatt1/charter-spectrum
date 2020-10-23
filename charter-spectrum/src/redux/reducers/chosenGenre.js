import { CHOSEN_GENRE } from '../actionTypes.js';

export default (state = "", action) => {
    switch (action.type) {
      case 'CHOSEN_GENRE':
        return action.payload
      default:
        return state;
    }
  }