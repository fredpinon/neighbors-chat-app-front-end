const typing = (state = {}, action) => {
  switch (action.type) {
    case 'USER-TYPING':
      return {
        ...state,
        [action.data.typingUser]: true,
      }
    case 'USER-STOPPED-TYPING':
      return {
        ...state,
        [action.data.typingUser]: false,
      }
    default:
      return state;
  }
};

export default typing;
