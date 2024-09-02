import { AppDispatch, GetAppState } from '../store';
import { addGym, setAllGymsLoadingState, setGymLoadingState, updateGym } from './slice';
import { getAllGyms, getGym } from '../../api/gym/get';
import { selectCurrentGymId } from './selectors';

export const loadGym =
    () =>
    async (dispatch: AppDispatch, getState: GetAppState): Promise<void> => {
        dispatch(setGymLoadingState('pending'));

        const state = getState();

        const currentGymId = selectCurrentGymId(state);

        if (!currentGymId) {
            return;
        }

        const { status, data } = await getGym(currentGymId);

        if (status === 200 && data) {
            // const tmp: IGym = {
            //     internalId: data.name.toLowerCase(),
            //     logo: EASYFITNESS.logo,
            //     offers: EASYFITNESS.offers,
            //     id: data.id,
            //     image: EASYFITNESS.image,
            //     abonnements: EASYFITNESS.abonnements,
            //     name: data.name,
            //     agbs: EASYFITNESS.agbs,
            //     location: EASYFITNESS.location,
            //     benefits: EASYFITNESS.benefits,
            //     openingTimes: EASYFITNESS.openingTimes,
            //     contact: { ...EASYFITNESS.contact, email: data.email } as IGym['contact'],
            //     hasLoaded: true
            // };

            dispatch(updateGym(data));
            dispatch(setGymLoadingState('successful'));

            return;
        }

        dispatch(setGymLoadingState('rejected'));

        return;
    };

export const loadAllGyms =
    () =>
    async (dispatch: AppDispatch): Promise<void> => {
        dispatch(setAllGymsLoadingState('pending'));

        const { status, data } = await getAllGyms();

        if (status === 200 && data) {
            dispatch(addGym(data));
            dispatch(setAllGymsLoadingState('successful'));

            return;
        }

        dispatch(setAllGymsLoadingState('rejected'));

        return;
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
