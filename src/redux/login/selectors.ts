import type { RootState } from '../store';

const selectGymState = (state: RootState) => state.login;

export const selectIsLoggedIn = (state: RootState) => selectGymState(state).isLoggedIn;

export const selectLoggedInGym = (state: RootState) => selectGymState(state).loggedInGym;
