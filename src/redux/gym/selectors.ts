import type { RootState } from '../store';
import { Gym } from '../../types/gym';
import { Offer } from '../../types/offer';

const selectGymState = (state: RootState) => state.gym;

export const selectGyms = (state: RootState) => selectGymState(state).gyms;

export const selectGymById = (state: RootState, gymInternalId: string): Gym | undefined => {
    return selectGyms(state).find(({ internalId }) => internalId === gymInternalId);
};

export const SelectGymIdByInternalId = (
    state: RootState,
    gymInternalId: string
): string | undefined => {
    return selectGyms(state).find(({ internalId }) => internalId === gymInternalId)?.id;
};

export const selectAbonnementsById = (state: RootState, gymId: string): Offer[] | undefined => {
    return selectGymById(state, gymId)?.abonnements;
};

export const selectOffersById = (state: RootState, gymId: string): Offer[] | undefined => {
    return selectGymById(state, gymId)?.offers;
};

export const selectGymNameById = (state: RootState, gymId: string): Gym['name'] | undefined => {
    return selectGymById(state, gymId)?.name;
};

export const selectContactById = (state: RootState, gymId: string): Gym['contact'] | undefined => {
    return selectGymById(state, gymId)?.contact;
};

export const selectLocationById = (
    state: RootState,
    gymId: string
): Gym['location'] | undefined => {
    return selectGymById(state, gymId)?.location;
};

/*
export const selectOpeningTimesById = (
    state: RootState,
    gymId: string
): Gym['openingTimes'] | undefined => {
    return selectGymById(state, gymId)?.openingTimes;
};

 */

export const selectLogoById = (state: RootState, gymId: string): Gym['logo'] | undefined => {
    return selectGymById(state, gymId)?.logo;
};

export const selectOfferById = (
    state: RootState,
    gymId: string,
    offerId: Offer['id']
): Offer | undefined => {
    const selectedGym = selectGymById(state, gymId);

    if (!selectedGym) {
        return undefined;
    }

    const { offers, abonnements } = selectedGym;

    const combinedOffers = [...offers, ...abonnements];

    return combinedOffers.find(({ id }) => id === offerId);
};

export const selectAgbsById = (state: RootState, gymId: string): Gym['agbs'] | undefined => {
    return selectGymById(state, gymId)?.agbs;
};

export const selectHasOffers = (state: RootState, gymId: string): boolean | undefined => {
    return (selectGymById(state, gymId)?.offers ?? []).length > 0;
};

export const selectGymLoadingState = (state: RootState) => selectGymState(state).gymLoadingState;

/*
export const selectOffersLoadingState = (state: RootState) =>
    selectGymState(state).offersLoadingState;


 */
