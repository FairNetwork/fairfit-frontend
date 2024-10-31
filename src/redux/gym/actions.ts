import { AppDispatch, GetAppState } from '../store';
import {
    addGym,
    setAllGymsLoadingState,
    setGymLoadingState,
    setSearchResultIds,
    setTags,
    updateGym,
    updateGymField
} from './slice';
import { getAllGyms, getGym } from '../../api/gym/get';
import { selectCurrentGymId, selectSearchString, selectSelectedTags } from './selectors';
import { getTags } from '../../api/tags/get';
import { IGym } from '../../types/gym';
import { patchGym } from '../../api/gym/patch';

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
    (update: Partial<IGym>) =>
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
