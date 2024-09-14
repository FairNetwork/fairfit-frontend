import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IGym } from '../../types/gym';
import { Offer } from '../../types/offer';
import { GetGymResult } from '../../api/gym/get';
import { ITag } from '../../types/tag';

type LoadingState = 'none' | 'pending' | 'rejected' | 'successful';

export interface GymState {
    currentGymId?: IGym['internalId'];
    gyms: { [internalGymId: string]: IGym };
    gymLoadingState: LoadingState;
    allGymsLoadingState: LoadingState;
    offersLoadingState: LoadingState;
    searchString: string;
    searchResultIds: string[];
    tags: ITag[];
    selectedTags: ITag['id'][];
}

const initialState: GymState = {
    gymLoadingState: 'none',
    offersLoadingState: 'none',
    allGymsLoadingState: 'none',
    gyms: {},
    searchString: '',
    searchResultIds: [],
    tags: [],
    selectedTags: []
};

const slice = createSlice({
    initialState,
    name: 'gym',
    reducers: {
        updateCurrentGymId(state, { payload }: PayloadAction<GymState['currentGymId']>) {
            state.currentGymId = payload;
        },
        addGym(state, { payload }: PayloadAction<GetGymResult[]>) {
            payload.forEach(({ id, name, address, gymImage, rating }) => {
                const internalId = name.toLowerCase().replaceAll(' ', '_');

                if (!state.gyms[internalId]) {
                    state.gyms[internalId] = {
                        id,
                        internalId,
                        name,
                        address,
                        gymImage,
                        abonnements: [],
                        rating
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
        addAbonnements(state, { payload }: PayloadAction<AddAbonnementsProps>) {
            const gym = state.gyms[payload.id];
            if (gym) {
                gym.abonnements = [...gym.abonnements, ...payload.abonnements];
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
        },
        setSearchString(state, { payload }: PayloadAction<GymState['searchString']>) {
            state.searchString = payload;
        },
        setTags(state, { payload }: PayloadAction<GymState['tags']>) {
            state.tags = payload;
        },
        setSelectedTags(state, { payload }: PayloadAction<GymState['selectedTags']>) {
            state.selectedTags = payload;
        },
        setSearchResultIds(state, { payload }: PayloadAction<GymState['searchResultIds']>) {
            state.searchResultIds = payload;
        }
    }
});

export const {
    setGymLoadingState,
    setOffersLoadingState,
    updateGym,
    addAbonnements,
    updateCurrentGymId,
    setAllGymsLoadingState,
    addGym,
    setSearchString,
    setTags,
    setSelectedTags,
    setSearchResultIds
} = slice.actions;

export const gymReducer = slice.reducer;

interface AddAbonnementsProps {
    id: IGym['internalId'];
    abonnements: Offer[];
}
