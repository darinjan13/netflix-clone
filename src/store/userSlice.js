import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tempEmail: '',
    email: '',
    password: ''
}

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setTempEmail: (state, action) => {
            state.tempEmail = action.payload
        },
        setEmail:(state, action) => {
            state.email = action.payload
        },
        setPassword:(state, action) => {
            state.password = action.payload
        }
    }
});

export const actions = userSlice.actions;

export default userSlice;