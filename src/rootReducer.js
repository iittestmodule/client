import { combineReducers } from 'redux';

import flashMessages from './reducers/flashMessages';
import test from './reducers/test';
import auth from './reducers/auth';

export default combineReducers({
  test,
  flashMessages,
  auth
});
