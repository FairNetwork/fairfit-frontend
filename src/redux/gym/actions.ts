import { AppDispatch, GetAppState } from '../store';
import {
    addAbonnements,
    addGym,
    removeSocialMedia,
    setAllGymsLoadingState,
    setGymLoadingState,
    setSearchResultIds,
    setTags,
    updateAbonnement,
    updateGym,
    updateGymField,
    updateOpeningTime,
    updateSocialMedia
} from './slice';
import { getAllGyms, getGym } from '../../api/gym/get';
import { selectCurrentGymId, selectSearchString, selectSelectedTags } from './selectors';
import { getTags } from '../../api/tags/get';
import { GymUpdate } from '../../types/gym';
import { patchGym } from '../../api/gym/patch';
import { deleteSocialMedia } from '../../api/social-media/delete';
import { postOpeningTime } from '../../api/social-media/post';
import { ISocialMedia } from '../../types/socialMedia';
import { IOpeningTimes } from '../../types/openingTimes';
import { postSocialMedia } from '../../api/opening-times/post';
import { Offer } from '../../types/offer';
import { patchAbonnement } from '../../api/abonnements/patch';
import { postAbonnement } from '../../api/abonnements/post';

export const loadGym =
    (isDashboard?: boolean) =>
    async (dispatch: AppDispatch, getState: GetAppState): Promise<void> => {
        dispatch(setGymLoadingState('pending'));

        const state = getState();

        const currentGymId = selectCurrentGymId(state);

        if (!currentGymId) {
            return;
        }

        const { status, data } = await getGym(currentGymId, isDashboard);

        if (status === 200 && data) {
            dispatch(updateGym(data));
            dispatch(setGymLoadingState('successful'));

            return;
        }

        dispatch(setGymLoadingState('rejected'));

        return;
    };

export const updateGymAction =
    (update: Partial<GymUpdate>) =>
    async (dispatch: AppDispatch, getState: GetAppState): Promise<void> => {
        const state = getState();

        const currentGymId = selectCurrentGymId(state);

        if (!currentGymId) {
            return;
        }

        const { status, data } = await patchGym(update, currentGymId);

        if (status === 200 && data) {
            dispatch(updateGymField(data));

            return;
        }

        return;
    };

export const removeSocialMediaAction =
    (id: string) =>
    async (dispatch: AppDispatch, getState: GetAppState): Promise<void> => {
        const state = getState();

        const currentGymId = selectCurrentGymId(state);

        if (!currentGymId) {
            return;
        }

        const { status } = await deleteSocialMedia(id);

        if (status === 200) {
            dispatch(removeSocialMedia({ internalId: currentGymId, id }));

            return;
        }

        return;
    };

export const updateSocialMediaAction =
    ({ id, userName, type }: ISocialMedia) =>
    async (dispatch: AppDispatch, getState: GetAppState): Promise<void> => {
        const state = getState();

        const currentGymId = selectCurrentGymId(state);

        if (!currentGymId) {
            return;
        }

        const { status, data } = await postSocialMedia({ type, gymId: currentGymId, userName, id });

        if (status === 200 && data) {
            dispatch(updateSocialMedia({ internalId: currentGymId, socialMedia: data }));

            return;
        }

        return;
    };

export const updateOpeningTimeAction =
    ({ type, id, startTime, endTime, closed }: IOpeningTimes) =>
    async (dispatch: AppDispatch, getState: GetAppState): Promise<void> => {
        const state = getState();

        const currentGymId = selectCurrentGymId(state);

        if (!currentGymId) {
            return;
        }

        const { status, data } = await postOpeningTime({
            type,
            gymId: currentGymId,
            endTime,
            startTime,
            closed,
            id
        });

        if (status === 200 && data) {
            dispatch(updateOpeningTime({ internalId: currentGymId, time: data }));

            return;
        }

        return;
    };

interface UpdateAbonnementActionOptions {
    id?: Offer['id'];
    isOffer?: Offer['isOffer'];
    title?: Offer['title'];
    details?: Offer['details'];
    price?: Offer['price'];
    duration?: Offer['duration'] | null;
    priceAfterDuration?: Offer['priceAfterDuration'] | null;
}

export const updateAbonnementAction =
    ({
        details,
        duration,
        priceAfterDuration,
        price,
        isOffer,
        title,
        id
    }: UpdateAbonnementActionOptions) =>
    async (dispatch: AppDispatch, getState: GetAppState): Promise<void> => {
        const state = getState();

        const currentGymId = selectCurrentGymId(state);

        if (!currentGymId) {
            return;
        }

        const { status, data } = await patchAbonnement({
            details: details
                ?.map((detail) =>
                    detail.id.startsWith('tmp') ? { ...detail, id: undefined } : detail
                )
                .filter(({ detail }) => detail.length > 0),
            duration,
            priceAfterDuration,
            price,
            isOffer,
            title,
            id
        });

        if (status === 200 && data) {
            dispatch(updateAbonnement({ internalId: currentGymId, data }));

            return;
        }

        return;
    };

export const postAbonnementAction =
    ({
        details,
        duration,
        priceAfterDuration,
        price,
        isOffer,
        title,
        id
    }: UpdateAbonnementActionOptions) =>
    async (dispatch: AppDispatch, getState: GetAppState): Promise<void> => {
        const state = getState();

        const currentGymId = selectCurrentGymId(state);

        if (!currentGymId) {
            return;
        }

        const { status, data } = await postAbonnement({
            details: details
                ?.map((detail) =>
                    detail.id.startsWith('tmp') ? { ...detail, id: undefined } : detail
                )
                .filter(({ detail }) => detail.length > 0),
            duration,
            priceAfterDuration,
            price,
            isOffer,
            title,
            id,
            gymId: currentGymId
        });

        if (status === 200 && data) {
            dispatch(addAbonnements({ id: currentGymId, abonnements: [data] }));

            return;
        }

        return;
    };

export const loadAllGyms =
    () =>
    async (dispatch: AppDispatch, getState: GetAppState): Promise<void> => {
        dispatch(setAllGymsLoadingState('pending'));

        const state = getState();

        const searchString = selectSearchString(state);
        const tags = selectSelectedTags(state);

        const { status, data } = await getAllGyms(searchString, tags);

        if (status === 200 && data) {
            dispatch(addGym(data));
            dispatch(setAllGymsLoadingState('successful'));

            if (searchString || tags) {
                dispatch(setSearchResultIds(data.map(({ id }) => id)));
            } else {
                dispatch(setSearchResultIds([]));
            }

            return;
        }

        dispatch(setAllGymsLoadingState('rejected'));

        return;
    };

export const loadTags =
    () =>
    async (dispatch: AppDispatch): Promise<void> => {
        const { status, data } = await getTags();

        if (status === 200 && data) {
            dispatch(setTags(data));
        }
    };

// export const sendEmail =
//     (gymName: string, message: string) =>
//     async (_: AppDispatch, getState: GetAppState): Promise<boolean> => {
//         const state = getState();
//
//         const gymId = SelectGymIdByInternalId(state, gymName);
//
//         if (!gymId) {
//             return false;
//         }
//
//         const { status } = await postSendMail(message, gymId);
//
//         return status === 201;
//     };

/*
export const loadOffers =
    (gymName: string) =>
    async (dispatch: AppDispatch): Promise<void> => {
        dispatch(setOffersLoadingState('pending'));

        let data: IGym | undefined;

        if (gymName === 'easyfitness') {
            data = {
                name: 'EasyFitness',
                agbs: TESTAGBS,
                offers: TESTOFFERS1,
                abonnements: TESTABONNEMENTS1
            };
        }

        if (gymName === 'bodyfit') {
            data = {
                name: 'BodyFit',
                agbs: TESTAGBS,
                offers: TESTOFFERS2,
                abonnements: TESTABONNEMENTS2
            };
        }

        if (!data) {
            dispatch(setOffersLoadingState('rejected'));

            return;
        }

        dispatch(setOffers(data.offers));
        dispatch(setAbonnements(data.abonnements));
        dispatch(setOffersLoadingState('successful'));

        return;

            const {data, status} = await get(gymName)

            if (status === 200 && data) {
                dispatch(setTeamLocations(teamLocations.data));
            }
    };
*/
