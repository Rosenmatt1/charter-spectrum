import { STATE_ACTIVE } from '../actionTypes.js';

export default (state = "", action) => {
    switch (action.type) {
      case 'STATE_ACTIVE':
        return action.payload
      default:
        return state;
    }
  }