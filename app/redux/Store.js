import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './RootReducer';

// Create a Redux store with the root reducer
const store = configureStore({
    reducer: rootReducer,
});

export default store;