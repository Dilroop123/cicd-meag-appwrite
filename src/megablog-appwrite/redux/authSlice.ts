import { createSlice } from '@reduxjs/toolkit'

export interface State {
    isAuthenticated: boolean,
    userData: any;
}

const initialState: State = {
    isAuthenticated: false,
    userData: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.isAuthenticated = true;
            state.userData = action.payload.userData;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.userData = null;
        },
    },
})

// Action creators are generated for each case reducer function
export const { login, logout } = authSlice.actions

export default authSlice.reducer