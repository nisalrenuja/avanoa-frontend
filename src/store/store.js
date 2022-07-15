import { configureStore, compose } from '@reduxjs/toolkit'
import counterReducer from '../reducers/counter/counterSlice'
import selectedIndexReducer from '../reducers/selectedIndexSlice/selectedIndexSlice';
import navListReducer from '../reducers/navList/navListSlice';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default configureStore({
  reducer: {
    counter: counterReducer,
    selectedIndex: selectedIndexReducer,
    navList: navListReducer
  },
  enhancers: composeEnhancers
})