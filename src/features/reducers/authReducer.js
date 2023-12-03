import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthenticated: false,
        token: null,
    },
    reducers: {
        loginSucess: (state, action) => {
            state.isAuthenticated = true;
            state.token = action.payload.token;
            localStorage.setItem('authToken', action.payload.token)
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.token = null;
            localStorage.removeItem('authToken')
            /* localStorage.removeItem('userName') */
        }
    }
})

export const { loginSucess, logout } = authSlice.actions;
export default authSlice.reducer;