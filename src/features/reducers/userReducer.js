import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        username: null,
        firstname: null,
        lastname: null,
    },
    reducers: {
        retrieveUser: (state, action) => {
            state.username = action.payload.userName
            state.firstname = action.payload.firstName
            state.lastname = action.payload.lastName
        },
        modifyUserName: (state, action) => {
            state.username = action.payload.userName
        },
        eraseUserStateOnLogout: (state) => {
            state.username = null
            state.firstname = null
            state.lastname = null
        }
    }
})

export const { retrieveUser, modifyUserName, eraseUserStateOnLogout } = userSlice.actions;
export default userSlice.reducer;