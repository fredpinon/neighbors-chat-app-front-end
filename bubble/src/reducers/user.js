const user = (state = {}, action) => {
  switch (action.type) {
    case 'USER_LOGGED_IN':
      return {
        ...state,
        ...action.data,
      }
    case 'USER_LOGGED_OUT':
    console.log(action);
    return {
      ...user,
        details : {
          ...action.data.details,
          online: false
        }
      }
    default:
      return state;
  }
}

export default user;
