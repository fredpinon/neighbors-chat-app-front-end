const messages = (state = [], action) => {
  switch (action.type) {
    case 'REFRESH_MESSAGES':
      return action.data
    case 'GET-MESSAGES':
      return action.data
    case 'USER_DELETED_ACCOUNT':
      return {}
    default:
      return state;
  }
};

export default messages;
