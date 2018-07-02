import { combineReducers } from 'redux';
import recipes from './recipesReducer'
import reviews from './reviewsReducer'

const rootReducer = combineReducers({
  recipes,
  reviews
});

export default rootReducer;
