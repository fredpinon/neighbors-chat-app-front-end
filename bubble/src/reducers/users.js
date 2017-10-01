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
      return objectifyArray(action.data);
    default:
      return state;
  }
};

export default users;
