import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index'

export function configureStore(){
  return createStore(rootReducer,
  	compose(applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : f => f));
}

export const store = configureStore()

//export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk));
