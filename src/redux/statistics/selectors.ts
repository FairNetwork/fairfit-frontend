import type { RootState } from '../store';

const selectStatisticsState = (state: RootState) => state.statistics;

export const selectStatistics = (state: RootState) => selectStatisticsState(state).statistics;

export const selectRequestStatistics = (state: RootState) =>
    selectStatistics(state)?.requests ?? [];

export const selectAbonnementStatistics = (state: RootState) =>
    selectStatistics(state)?.abonnements ?? [];
