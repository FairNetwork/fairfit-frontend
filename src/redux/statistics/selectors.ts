import type { RootState } from '../store';

const selectStatisticsState = (state: RootState) => state.statistics;

export const selectRequestStatistics = (state: RootState) => selectStatisticsState(state).requests;
