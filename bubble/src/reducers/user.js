const user = (state = {}, action) => {
  switch (action.type) {
    case 'USER_LOGGED_IN':
      return {
        ...state,
        ...action.data,
      }
    case 'USER_LOGGED_OUT':
    return {
      ...user,
        details : {
          ...action.data.details,
          online: false
        }
      }
    case 'USER_DELETED_ACCOUNT':
    return {}
    default:
      return state;
  }
}

export default user;
