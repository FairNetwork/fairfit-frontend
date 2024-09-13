import type { RootState } from '../store';
import { Offer } from '../../types/offer';
import { createSelector } from '@reduxjs/toolkit';

const selectGymState = (state: RootState) => state.gym;

export const selectGyms = (state: RootState) => selectGymState(state).gyms;

export const selectCurrentGymId = (state: RootState): string | undefined => {
    return selectGymState(state).currentGymId;
};

export const selectCurrentGym = createSelector(
    [selectGyms, selectCurrentGymId],
    (gyms, currentGymId) => (currentGymId ? gyms[currentGymId] : undefined)
);

export const selectGymId = createSelector(selectCurrentGym, (currentGym) => currentGym?.id);

export const selectAbonnements = createSelector(
    selectCurrentGym,
    (currentGym) => currentGym?.abonnements
);

export const selectAllGymsLoadingState = (state: RootState) =>
    selectGymState(state).allGymsLoadingState;

export const selectBenefits = createSelector(
    selectCurrentGym,
    (currentGym) => currentGym?.benefits
);

export const selectImage = createSelector(selectCurrentGym, (currentGym) => currentGym?.gymImage);

export const selectOfferNames = createSelector([selectAbonnements], (abonnements) => {
    return abonnements?.map(({ title }) => title);
});

export const selectGymName = createSelector(selectCurrentGym, (currentGym) => currentGym?.name);

export const selectSocialMedia = createSelector(
    selectCurrentGym,
    (currentGym) => currentGym?.socialMedia
);

export const selectOfferById = createSelector(
    [selectCurrentGym, (_: RootState, offerId: Offer['id']) => offerId],
    (currentGym, offerId) => {
        if (!currentGym) return undefined;
        const { abonnements } = currentGym;
        return abonnements.find(({ id }) => id === offerId);
    }
);

export const selectHasOffers = createSelector(selectAbonnements, (abonnements) =>
    abonnements?.some(({ isOffer }) => isOffer)
);

export const selectGymLoadingState = createSelector(
    selectGymState,
    (gymState) => gymState.gymLoadingState
);
