import { createStore as reduxCreateStore, applyMiddleware, combineReducers } from "redux";
import logger from 'redux-logger';
import thunk from 'redux-thunk'
import { todoReducer } from './reducers/Todo';
import posts from './reducers/Api';
import {addPointReducer} from "./reducers/AddPoint";
import { reducer as reduxFormReducer } from 'redux-form';

export default function createStore() {
  const store = reduxCreateStore(
    combineReducers({
      todo: todoReducer,
      post: posts,
      addPoint: addPointReducer,
      form: reduxFormReducer,
    }),
    applyMiddleware(
      logger,
      thunk,
    )
  );

  return store;
}