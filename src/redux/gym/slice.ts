import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Gym } from '../../types/gym';
import { Offer } from '../../types1/offer';
import { GetGymResult } from '../../api/gym/get';

type LoadingState = 'none' | 'pending' | 'rejected' | 'successful';

export interface GymState {
    gyms: Gym[];
    gymLoadingState: LoadingState;
    allGymsLoadingState: LoadingState;
    offersLoadingState: LoadingState;
}

const initialState: GymState = {
    gymLoadingState: 'none',
    offersLoadingState: 'none',
    allGymsLoadingState: 'none',
    gyms: []
};

const slice = createSlice({
    initialState,
    name: 'gym',
    reducers: {
        addGym(state, { payload }: PayloadAction<GetGymResult[]>) {
            const { gyms } = state;

            payload.forEach(({ id, name, email }) => {
                const currentGym = gyms.find(({ id: gymId }) => gymId === id);

                if (!currentGym) {
                    gyms.push({
                        id,
                        name,
                        image: '',
                        internalId: name.toLowerCase(),
                        contact: {
                            email
                        },
                        logo: '',
                        offers: [],
                        abonnements: [],
                        hasLoaded: false
                    });
                }
            });
        },
        updateGym(state, { payload }: PayloadAction<Gym>) {
            const { gyms } = state;

            const index = gyms.findIndex(({ id }) => id === payload.id);

            if (index < 0) {
                gyms.push(payload);

                return;
            }

            state.gyms = gyms.map((gym) => {
                if (gym.id === payload.id) {
                    return {
                        ...gym,
                        ...payload
                    };
                }

                return gym;
            });
        },
        addOffers(state, { payload }: PayloadAction<AddOfferProps>) {
            const { gyms } = state;

            const index = gyms.findIndex(({ internalId }) => internalId === payload.id);

            if (index < 0) {
                return;
            }

            const { offers } = gyms[index];

            gyms[index].offers = [...offers, ...payload.offers];
        },
        addAbonnements(state, { payload }: PayloadAction<AddOfferProps>) {
            const { gyms } = state;

            const index = gyms.findIndex(({ internalId }) => internalId === payload.id);

            if (index < 0) {
                return;
            }

            const { abonnements } = gyms[index];

            gyms[index].abonnements = [...abonnements, ...payload.offers];
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
    setAllGymsLoadingState,
    addGym
} = slice.actions;

export const gymReducer = slice.reducer;

interface AddOfferProps {
    id: Gym['id'];
    offers: Offer[];
}
