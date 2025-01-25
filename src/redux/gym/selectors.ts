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

export const selectCurrentGymId = (state: RootState): string | undefined => {
    return selectGymState(state).currentId;
};

export const selectCurrentGym = createSelector(
    [selectGyms, selectCurrentGymId],
    (gyms, currentGymId) => (currentGymId ? gyms[currentGymId] : undefined)
);

export const selectAbonnements = createSelector(
    selectCurrentGym,
    (currentGym) => currentGym?.abonnements
);

export const selectBenefits = createSelector(
    selectCurrentGym,
    (currentGym) => currentGym?.benefits
);

export const selectSocialMedia = createSelector(
    selectCurrentGym,
    (currentGym) => currentGym?.socialMedia
);

export const selectOpeningTimes = createSelector(
    selectCurrentGym,
    (currentGym) => currentGym?.openingTimes
);

export const selectGymHeaderActions = createSelector(selectCurrentGym, (currentGym) => {
    return {
        hasAbonnements: !!currentGym?.abonnements,
        hasBenefits: !!currentGym?.benefits,
        hasOpeningTimes: !!currentGym?.openingTimes,
        hasSocialMedia: !!currentGym?.socialMedia
    };
});

export const selectGymName = createSelector(selectCurrentGym, (currentGym) => currentGym?.name);

export const selectGymSettings = createSelector(selectCurrentGym, (currentGym) => {
    if (!currentGym) {
        return undefined;
    }

    const { name, address, type, mail } = currentGym;

    return {
        name,
        address,
        type,
        mail
    };
});
