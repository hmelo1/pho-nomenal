import { combineReducers } from 'redux';
import recipes from './recipesReducer';
import reviews from './reviewsReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  recipes,
  reviews,
  form: formReducer,
});

export default rootReducer;
