import { combineReducers } from 'redux';
import user from './user';
import contacts from './contacts';
import activeUserId from './activeUserId';
import messages from './messages';
import typing from './Typing';

export default combineReducers({
  user: user,
  messages,
  contacts: contacts,
  activeUserId,
  typing
});