import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Gym } from '../../types/gym';
import { Offer } from '../../types/offer';

type LoadingState = 'none' | 'pending' | 'rejected' | 'successful';

export interface GymState {
    gyms: Gym[];
    gymLoadingState: LoadingState;
    offersLoadingState: LoadingState;
}

const initialState: GymState = {
    gymLoadingState: 'none',
    offersLoadingState: 'none',
    gyms: []
};

const slice = createSlice({
    initialState,
    name: 'gym',
    reducers: {
        addGym(state, { payload }: PayloadAction<Gym>) {
            const { gyms } = state;

            const index = gyms.findIndex(({ id }) => id === payload.id);

            if (index >= 0) {
                return;
            }

            gyms.push(payload);
        },
        addOffers(state, { payload }: PayloadAction<AddOfferProps>) {
            const { gyms } = state;

            const index = gyms.findIndex(({ id }) => id === payload.id);

            if (index < 0) {
                return;
            }

            const { offers } = gyms[index];

            gyms[index].offers = [...offers, ...payload.offers];
        },
        addAbonnements(state, { payload }: PayloadAction<AddOfferProps>) {
            const { gyms } = state;

            const index = gyms.findIndex(({ id }) => id === payload.id);

            if (index < 0) {
                return;
            }

            const { abonnements } = gyms[index];

            gyms[index].abonnements = [...abonnements, ...payload.offers];
        },
        setGymLoadingState(state, { payload }: PayloadAction<GymState['gymLoadingState']>) {
            state.gymLoadingState = payload;
        },
        setOffersLoadingState(state, { payload }: PayloadAction<GymState['offersLoadingState']>) {
            state.offersLoadingState = payload;
        }
    }
});

export const { setGymLoadingState, setOffersLoadingState, addAbonnements, addOffers, addGym } =
    slice.actions;

export const gymReducer = slice.reducer;

interface AddOfferProps {
    id: Gym['id'];
    offers: Offer[];
}
