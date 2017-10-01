const objectifyArray = (array, idKey = 'username') => {
 return array.reduce((accum, item) => {
   accum[item[idKey]] = item;
   return accum;
 }, {});
};

const users = (state = {}, action) => {
  switch (action.type) {
    case 'ALL_USERS':
      return {
        ...objectifyArray(action.data)
      }
    case 'USER_LIST_STATUS_CHANGE':
    console.log(action.data);
      return objectifyArray(action.data);
    // case 'NEW_USER_CONNECTED':
      // const email = action.data.email;
      // return {
      //   ...state,
      //   [email]: {
      //     ...state[email],
      //     online: true,
      //   }
      // }
    default:
      return state;
  }
};

export default users;
