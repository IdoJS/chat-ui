import { createStore } from 'redux';
import chatReducer from './reducers/chatReducer';

const store = createStore(
  chatReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

window.store = store;


export default store;
