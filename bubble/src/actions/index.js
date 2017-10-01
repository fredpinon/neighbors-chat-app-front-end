export const userLoggedIn = data => ({
  type: 'USER_LOGGED_IN',
  data
});

export const userLoggedOut = data => ({
  type: 'USER_LOGGED_OUT',
  data
});

export const userDeletedAccount = data => ({
  type: 'USER_DELETED_ACCOUNT',
  data
});

export const getUsersList = data => ({
  type: 'ALL_USERS',
  data
});
