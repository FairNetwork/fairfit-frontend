import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { GymHistory } from '../../types/gym';

const selectGymState = (state: RootState) => state.gym;

export const selectGyms = (state: RootState) => selectGymState(state).gyms;

export const selectHistory = (state: RootState) => selectGymState(state).history;

export const selectFilteredGyms = createSelector([selectGyms], (gyms) => {
    return Object.values(gyms);
});

export const selectGymsFromHistory = createSelector(
    [selectGyms, selectHistory],
    (gyms, history) => {
        const historyGyms: GymHistory[] = [];

        history.forEach((id) => {
            const gym = gyms[id];

            historyGyms.push({
                id,
                name: gym.name,
                type: gym.type
            });
        });

        return historyGyms;
    }
);
