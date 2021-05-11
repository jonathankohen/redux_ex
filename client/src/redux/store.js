import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './slices/counter_slice';
import authReducer from './slices/auth_slice';

const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer,
    },
});

export default store;
