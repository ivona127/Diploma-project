import { combineReducers } from '@reduxjs/toolkit';
import secretKeyReducer from './SecretKeyReducer';

// Combine the reducers
const rootReducer = combineReducers({
    secretKey: secretKeyReducer,
});

export default rootReducer;