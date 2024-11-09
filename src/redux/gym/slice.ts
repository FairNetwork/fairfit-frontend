import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IGym } from '../../types/gym';
import { Offer } from '../../types/offer';
import { GetGymResult } from '../../api/gym/get';
import { ITag } from '../../types/tag';
import { ISocialMedia } from '../../types/socialMedia';
import { IOpeningTimes } from '../../types/openingTimes';
import { IBenefit } from '../../types/benefit';

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
            payload.forEach(({ id, name, address, gymImage, slogan, rating, tags }) => {
                const internalId = name.toLowerCase().replaceAll(' ', '_');

                if (!state.gyms[internalId]) {
                    state.gyms[internalId] = {
                        id,
                        internalId,
                        name,
                        address,
                        slogan,
                        tags,
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
        updateGymField(
            state,
            { payload }: PayloadAction<{ internalId: IGym['internalId']; data: Partial<IGym> }>
        ) {
            const { internalId, data } = payload;

            state.gyms[internalId] = {
                ...state.gyms[internalId],
                ...data
            };
        },
        addAbonnements(state, { payload }: PayloadAction<AddAbonnementsProps>) {
            const gym = state.gyms[payload.id];

            if (gym) {
                gym.abonnements = [...gym.abonnements, ...payload.abonnements];
            }
        },
        addBenefit(state, { payload }: PayloadAction<AddBenefitProps>) {
            const gym = state.gyms[payload.id];

            if (gym) {
                if (gym.benefits) {
                    gym.benefits = [...gym.benefits, ...payload.benefit];
                } else {
                    gym.benefits = payload.benefit;
                }
            }
        },
        removeBenefit(state, { payload }: PayloadAction<{ internalId: string; id: string }>) {
            const gym = state.gyms[payload.internalId];

            if (gym) {
                if (gym.benefits) {
                    gym.benefits = gym.benefits.filter((benefit) => benefit.id !== payload.id);
                }
            }
        },
        removeAbonnement(state, { payload }: PayloadAction<{ internalId: string; id: string }>) {
            const gym = state.gyms[payload.internalId];

            if (gym) {
                if (gym.abonnements) {
                    gym.abonnements = gym.abonnements.filter(
                        (abonnement) => abonnement.id !== payload.id
                    );
                }
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
        removeSocialMedia(
            state,
            { payload }: PayloadAction<{ internalId: IGym['internalId']; id: string }>
        ) {
            const { internalId, id } = payload;

            if (state.gyms[internalId]) {
                state.gyms[internalId].socialMedia?.filter((media) => media.id !== id);
            }
        },
        updateSocialMedia(
            state,
            {
                payload
            }: PayloadAction<{ internalId: IGym['internalId']; socialMedia: ISocialMedia }>
        ) {
            const { internalId, socialMedia } = payload;

            if (state.gyms[internalId]) {
                if (!state.gyms[internalId].socialMedia) {
                    state.gyms[internalId].socialMedia = [];
                }

                const existingEntryIndex = state.gyms[internalId].socialMedia?.findIndex(
                    (media) => media.type === socialMedia.type
                );

                if (existingEntryIndex && existingEntryIndex >= 0) {
                    state.gyms[internalId].socialMedia![existingEntryIndex] = socialMedia;
                } else {
                    state.gyms[internalId].socialMedia!.push(socialMedia);
                }
            }
        },
        updateAbonnement(
            state,
            { payload }: PayloadAction<{ internalId: IGym['internalId']; data: Offer }>
        ) {
            const { internalId, data } = payload;

            if (state.gyms[internalId]) {
                if (!state.gyms[internalId].abonnements) {
                    state.gyms[internalId].abonnements = [];
                }

                const existingEntryIndex = state.gyms[internalId].abonnements?.findIndex(
                    ({ id }) => id === data.id
                );

                if (existingEntryIndex && existingEntryIndex >= 0) {
                    state.gyms[internalId].abonnements![existingEntryIndex] = data;
                } else {
                    state.gyms[internalId].abonnements!.push(data);
                }
            }
        },
        updateOpeningTime(
            state,
            { payload }: PayloadAction<{ internalId: IGym['internalId']; time: IOpeningTimes }>
        ) {
            const { internalId, time } = payload;

            if (state.gyms[internalId]) {
                if (!state.gyms[internalId].openingTimes) {
                    state.gyms[internalId].openingTimes = [];
                }

                const existingEntryIndex = state.gyms[internalId].openingTimes?.findIndex(
                    (media) => media.type === time.type
                );

                if (existingEntryIndex && existingEntryIndex >= 0) {
                    state.gyms[internalId].openingTimes![existingEntryIndex] = time;
                } else {
                    state.gyms[internalId].openingTimes!.push(time);
                }
            }
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
    updateSocialMedia,
    addAbonnements,
    updateCurrentGymId,
    setAllGymsLoadingState,
    addGym,
    setSearchString,
    updateOpeningTime,
    removeAbonnement,
    setTags,
    addBenefit,
    removeBenefit,
    setSelectedTags,
    updateAbonnement,
    removeSocialMedia,
    updateGymField,
    setSearchResultIds
} = slice.actions;

export const gymReducer = slice.reducer;

interface AddAbonnementsProps {
    id: IGym['internalId'];
    abonnements: Offer[];
}

interface AddBenefitProps {
    id: IGym['internalId'];
    benefit: IBenefit[];
}
