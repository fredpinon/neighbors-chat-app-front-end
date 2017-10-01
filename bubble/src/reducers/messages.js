const messages = (state = [], action) => {
  switch (action.type) {
    case 'REFRESH_MESSAGES':
    console.log(action);
      return action.data
    case 'GET-MESSAGES':
      return action.data
    default:
      return state;
  }
};

export default messages;
