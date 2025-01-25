import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Gym } from '../../types/gym';
import { GYM_MOCK_DATA } from '../../_mock/gyms';

type LoadingState = 'none' | 'pending' | 'rejected' | 'successful';

export interface GymState {
    history: Gym['id'][];
    gyms: { [key: Gym['id']]: Gym };
    currentId?: Gym['id'];
}

const initialState: GymState = {
    history: [],
    gyms: GYM_MOCK_DATA
};

const slice = createSlice({
    initialState,
    name: 'gym',
    reducers: {
        addHistoryEntry(state, { payload }: PayloadAction<Gym['id']>) {
            if (!state.history.includes(payload)) {
                state.history.push(payload);
            }
        },
        setCurrentId(state, { payload }: PayloadAction<Gym['id']>) {
            state.currentId = payload;
        }
    }
});

export const { addHistoryEntry, setCurrentId } = slice.actions;

export const gymReducer = slice.reducer;
