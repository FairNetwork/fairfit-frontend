import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IGym } from '../../types/gym';
import { Offer } from '../../types/offer';
import { GetGymResult } from '../../api/gym/get';
import { ITag } from '../../types/tag';

export interface StatisticsState {
    requests: string;
}

const initialState: StatisticsState = {
    requests: ''
};

const slice = createSlice({
    initialState,
    name: 'statistics',
    reducers: {
        setRequestsStatistics(state, { payload }: PayloadAction<StatisticsState['requests']>) {
            state.requests = payload;
        }
    }
});

export const { setRequestsStatistics } = slice.actions;

export const statisticsReducer = slice.reducer;
