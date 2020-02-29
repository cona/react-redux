import { createStore as reduxCreateStore, applyMiddleware, combineReducers } from "redux";
import logger from 'redux-logger';
import thunk from 'redux-thunk'
import { todoReducer } from './reducers/Todo';
import posts from './reducers/Api';
import { reducer as reduxFormReducer } from 'redux-form';

export default function createStore() {
  const store = reduxCreateStore(
    combineReducers({
      todo: todoReducer,
      post: posts,
      form: reduxFormReducer,
    }),
    applyMiddleware(
      logger,
      thunk,
    )
  );

  return store;
}