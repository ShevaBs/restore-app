import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducers';

const logWiddleware = (store) => (dispatch) => (action) => {
  console.log(action.type);
  return dispatch(action);
}

const stringMiddleware = () => (dispatch) => (action) => {
  if(typeof action === 'string') {
    return dispatch({
      type: action
    })
  }

  return dispatch(action)
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware, stringMiddleware, logWiddleware));



store.dispatch('HELLO_WORLD');

export default store;