import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface LoginState {
    isLoggedIn?: boolean;
}

const initialState: LoginState = {};

const slice = createSlice({
    initialState,
    name: 'gym',
    reducers: {
        setIsLoggedIn(state, { payload }: PayloadAction<LoginState['isLoggedIn']>) {
            state.isLoggedIn = payload;
        }
    }
});

export const { setIsLoggedIn } = slice.actions;

export const loginReducer = slice.reducer;
