import { combineReducers } from 'redux';

import user from './user';
import users from './users';
import messages from './messages';
import typing from './typing';

const reducers = combineReducers({
  user,
  users,
  messages,
  typing,
})

export default reducers;
