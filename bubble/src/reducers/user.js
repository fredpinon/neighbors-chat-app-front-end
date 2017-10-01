const user = (state = {}, action) => {
  switch (action.type) {
    case 'USER_LOGGED_IN':
      return {
        ...state,
        ...action.data,
      }
    default:
      return state;
  }
}

export default user;
