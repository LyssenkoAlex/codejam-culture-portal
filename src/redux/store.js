import { createStore } from 'redux';
import directorsRootReducer from './reducers/reducers'

const store = createStore(directorsRootReducer);

export default store;
