const messages = (state = [], action) => {
  switch (action.type) {
    case 'REFRESH_MESSAGES':
      return action.data
    case 'GET-MESSAGES':
      return action.data
    default:
      return state;
  }
};

export default messages;
