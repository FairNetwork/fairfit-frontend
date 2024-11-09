import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Offer } from '../../types/offer';
import { User } from '../../types/user';

type LoadingState = 'none' | 'pending' | 'rejected' | 'successful';

export interface UserState {
    selectedOfferName?: Offer['title'];
    user: User;
    sendOrderLoadingState: LoadingState;
}

const initialState: UserState = {
    user: {},
    sendOrderLoadingState: 'none'
};

const slice = createSlice({
    initialState,
    name: 'user',
    reducers: {
        updateUserField(state, { payload }: PayloadAction<{ key: keyof User; value: any }>) {
            const { key, value } = payload;

            if (state.user) {
                state.user[key] = value as never;
            } else {
                state.user = {};
                state.user[key] = value as never;
            }
        },
        setSelectedOfferName(state, { payload }: PayloadAction<UserState['selectedOfferName']>) {
            state.selectedOfferName = payload;
        },
        setUser(state, { payload }: PayloadAction<UserState['user']>) {
            state.user = payload;
        },
        setSendOrderLoadingState(
            state,
            { payload }: PayloadAction<UserState['sendOrderLoadingState']>
        ) {
            state.sendOrderLoadingState = payload;
        }
    }
});

export const { setSendOrderLoadingState, updateUserField, setUser, setSelectedOfferName } =
    slice.actions;

export const userReducer = slice.reducer;
