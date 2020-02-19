import { createStore } from 'redux';
import authorsRootReducer from './reducers/reducers'

const store = createStore(authorsRootReducer);

export default store;
