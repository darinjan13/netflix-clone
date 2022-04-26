import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: { isLoggedIn: false },
    reducers: {
        setLogin:(state, action) => {
            state.isLoggedIn = action.payload;
        }
    }
});

export const authActions = authSlice.actions;

export default authSlice;