
export default (state = false, action) => {
    switch (action.type) {
      case 'STATE_ACTIVE':
        return action.payload
      default:
        return state;
    }
  }