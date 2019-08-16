import { createStore, combineReducers } from 'redux';
import actions from './action';
import reducer from './reducer';

const ourDepartments = combineReducers({
  accounting: reducer.accounting,
  claimsHistory: reducer.claimsHistory,
  policies: reducer.policies
});

const store = createStore(ourDepartments);

export default store;