// import { CHOSEN_STATE } from '../actionTypes.js';

export default (state = false, action) => {
    switch (action.type) {
      case 'CHOSEN_STATE':
        return action.payload
      default:
        return state;
    }
  }