import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Statistics } from '../../types/statistics';

export interface StatisticsState {
    statistics?: Statistics;
}

const initialState: StatisticsState = {};

const slice = createSlice({
    initialState,
    name: 'statistics',
    reducers: {
        setStatistics(state, { payload }: PayloadAction<StatisticsState['statistics']>) {
            state.statistics = payload;
        }
    }
});

export const { setStatistics } = slice.actions;

export const statisticsReducer = slice.reducer;
