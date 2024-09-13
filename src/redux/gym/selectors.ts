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

export const selectBenefits = createSelector(
    selectCurrentGym,
    (currentGym) => currentGym?.benefits
);

export const selectHasGymLoaded = createSelector(
    selectCurrentGym,
    (currentGym) => currentGym?.hasLoaded
);

export const selectOffers = createSelector(selectCurrentGym, (currentGym) => currentGym?.offers);

export const selectOfferNames = createSelector(
    [selectOffers, selectAbonnements],
    (offers, abonnements) => {
        const combined = [...(offers ?? []), ...(abonnements ?? [])];
        return combined.map(({ title }) => title);
    }
);

export const selectGymName = createSelector(selectCurrentGym, (currentGym) => currentGym?.name);

export const selectContact = createSelector(selectCurrentGym, (currentGym) => currentGym?.contact);

export const selectLocation = createSelector(
    selectCurrentGym,
    (currentGym) => currentGym?.location
);

export const selectOpeningTimes = createSelector(
    selectCurrentGym,
    (currentGym) => currentGym?.openingTimes
);

export const selectLogo = createSelector(selectCurrentGym, (currentGym) => currentGym?.logo);

export const selectOfferById = createSelector(
    [selectCurrentGym, (_: RootState, offerId: Offer['id']) => offerId],
    (currentGym, offerId) => {
        if (!currentGym) return undefined;
        const { offers, abonnements } = currentGym;
        const combinedOffers = [...offers, ...abonnements];
        return combinedOffers.find(({ id }) => id === offerId);
    }
);

export const selectImage = createSelector(selectCurrentGym, (currentGym) => currentGym?.image);

export const selectAgbs = createSelector(selectCurrentGym, (currentGym) => currentGym?.agbs);

export const selectHasOffers = createSelector(selectAbonnements, (abonnements) =>
    abonnements?.some(({ isOffer }) => isOffer)
);

export const selectGymLoadingState = createSelector(
    selectGymState,
    (gymState) => gymState.gymLoadingState
);

export const selectAllGymsLoadingState = createSelector(
    selectGymState,
    (gymState) => gymState.allGymsLoadingState
);

// export const selectOffersLoadingState = createSelector(
//     selectGymState,
//     (gymState) => gymState.offersLoadingState
// );
