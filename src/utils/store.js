import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/reducers/authReducer'
import userReducer from '../features/reducers/userReducer';

const storedToken = localStorage.getItem('authToken')

const store = configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer,
    },
    preloadedState: {
        auth: {
            isAuthenticated: !!storedToken,
            token: storedToken || null,
        },
        user: {
            username: null,
            firstname: null,
            lastname: null,
        },
    }
})

export default store;