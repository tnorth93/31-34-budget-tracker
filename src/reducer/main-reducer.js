import { combineReducers } from 'redux';
import categories from './category-reducer';
import expenses from './expense-reducer';

export default combineReducers({
  categories,
  expenses,
});