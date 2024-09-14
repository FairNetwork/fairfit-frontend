import type { RootState } from '../store';
import { Offer } from '../../types/offer';
import { createSelector } from '@reduxjs/toolkit';
import { UtilityType } from '../../types/utility';

const selectGymState = (state: RootState) => state.gym;

export const selectGyms = (state: RootState) => selectGymState(state).gyms;

export const selectCurrentGymId = (state: RootState): string | undefined => {
    return selectGymState(state).currentGymId;
};

export const selectSearchString = (state: RootState): string => {
    return selectGymState(state).searchString;
};

export const selectSearchResultIds = (state: RootState) => {
    return selectGymState(state).searchResultIds;
};

export const selectTags = (state: RootState) => {
    return selectGymState(state).tags;
};

export const selectSelectedTagIds = (state: RootState) => {
    return selectGymState(state).selectedTags;
};

export const selectCurrentGym = createSelector(
    [selectGyms, selectCurrentGymId],
    (gyms, currentGymId) => (currentGymId ? gyms[currentGymId] : undefined)
);
export const selectSelectedTags = createSelector(
    [selectTags, selectSelectedTagIds],
    (tags, selectedTagIds) =>
        tags.filter(({ id }) => selectedTagIds.includes(id)).map(({ name }) => name)
);

export const selectFilteredGyms = createSelector(
    [selectGyms, selectSearchResultIds],
    (gyms, searchResultIds) =>
        searchResultIds.length > 0
            ? Object.values(gyms).filter(({ id }) => searchResultIds.includes(id))
            : Object.values(gyms)
);

export const selectGymId = createSelector(selectCurrentGym, (currentGym) => currentGym?.id);

export const selectAbonnements = createSelector(
    selectCurrentGym,
    (currentGym) => currentGym?.abonnements
);

export const selectHasGymLoaded = createSelector(
    selectCurrentGym,
    (currentGym) => currentGym?.hasLoaded
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

export const selectOpeningTimes = createSelector(
    selectCurrentGym,
    (currentGym) => currentGym?.openingTimes
);

export const selectUtilitys = createSelector(
    selectCurrentGym,
    (currentGym) => currentGym?.utilitys
);

export const selectUtilityByType = (state: RootState, type?: UtilityType) => {
    return selectUtilitys(state)?.find(({ type: utilityType }) => type === utilityType)?.html;
};

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
