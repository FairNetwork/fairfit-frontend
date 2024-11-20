import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface LoginState {
    isLoggedIn?: boolean;
    loggedInGym?: string;
}

const initialState: LoginState = {
    loggedInGym: 'testfit'
};

const slice = createSlice({
    initialState,
    name: 'gym',
    reducers: {
        setIsLoggedIn(state, { payload }: PayloadAction<LoginState['isLoggedIn']>) {
            state.isLoggedIn = payload;
        },
        setLoggedInGym(state, { payload }: PayloadAction<LoginState['loggedInGym']>) {
            state.loggedInGym = payload;
        }
    }
});

export const { setIsLoggedIn, setLoggedInGym } = slice.actions;

export const loginReducer = slice.reducer;
