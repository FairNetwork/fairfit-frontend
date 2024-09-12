import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IGym } from '../../types/gym';
import { Offer } from '../../types/offer';
import { GetGymResult } from '../../api/gym/get';

type LoadingState = 'none' | 'pending' | 'rejected' | 'successful';

export interface GymState {
    currentGymId?: IGym['internalId'];
    gyms: { [internalGymId: string]: IGym };
    gymLoadingState: LoadingState;
    allGymsLoadingState: LoadingState;
    offersLoadingState: LoadingState;
}

const initialState: GymState = {
    gymLoadingState: 'none',
    offersLoadingState: 'none',
    allGymsLoadingState: 'none',
    gyms: {}
};

const slice = createSlice({
    initialState,
    name: 'gym',
    reducers: {
        updateCurrentGymId(state, { payload }: PayloadAction<GymState['currentGymId']>) {
            state.currentGymId = payload;
        },
        addGym(state, { payload }: PayloadAction<GetGymResult[]>) {
            payload.forEach(({ id, name, address }) => {
                const internalId = name.toLowerCase().replaceAll(' ', '_');

                if (!state.gyms[internalId]) {
                    state.gyms[internalId] = {
                        id,
                        internalId,
                        name,
                        location: {
                            address
                        },
                        image: '',
                        logo: '',
                        offers: [],
                        abonnements: [],
                        hasLoaded: false
                    };
                }
            });
        },
        updateGym(state, { payload }: PayloadAction<IGym>) {
            const { internalId } = payload;
            state.gyms[internalId] = {
                ...state.gyms[internalId],
                ...payload
            };
        },
        addOffers(state, { payload }: PayloadAction<AddOfferProps>) {
            const gym = state.gyms[payload.id];
            if (gym) {
                gym.offers = [...gym.offers, ...payload.offers];
            }
        },
        addAbonnements(state, { payload }: PayloadAction<AddOfferProps>) {
            const gym = state.gyms[payload.id];
            if (gym) {
                gym.abonnements = [...gym.abonnements, ...payload.offers];
            }
        },
        setGymLoadingState(state, { payload }: PayloadAction<GymState['gymLoadingState']>) {
            state.gymLoadingState = payload;
        },
        setAllGymsLoadingState(state, { payload }: PayloadAction<GymState['allGymsLoadingState']>) {
            state.allGymsLoadingState = payload;
        },
        setOffersLoadingState(state, { payload }: PayloadAction<GymState['offersLoadingState']>) {
            state.offersLoadingState = payload;
        }
    }
});

export const {
    setGymLoadingState,
    setOffersLoadingState,
    updateGym,
    addAbonnements,
    addOffers,
    updateCurrentGymId,
    setAllGymsLoadingState,
    addGym
} = slice.actions;

export const gymReducer = slice.reducer;

interface AddOfferProps {
    id: IGym['internalId'];
    offers: Offer[];
}
