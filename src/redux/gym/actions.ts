import { AppDispatch, GetAppState } from '../store';
import { addGym, setGymLoadingState } from './slice';
import { EASYFITNESS } from '../../constants/mockData';
import { getGym } from '../../api/gym/get';
import { Gym } from '../../types/gym';
import { postSendMail } from '../../api/gym/post';
import { SelectGymIdByInternalId } from './selectors';

export const loadGym =
    (gymName: string) =>
    async (dispatch: AppDispatch): Promise<void> => {
        dispatch(setGymLoadingState('pending'));

        const { status, data } = await getGym(gymName);

        if (status === 200 && data) {
            const tmp: Gym = {
                internalId: data.name.toLowerCase(),
                logo: EASYFITNESS.logo,
                offers: EASYFITNESS.offers,
                id: data.id,
                abonnements: EASYFITNESS.abonnements,
                name: data.name,
                agbs: EASYFITNESS.agbs,
                location: EASYFITNESS.location,
                contact: { ...EASYFITNESS.contact, email: data.email } as Gym['contact']
            };

            dispatch(addGym(tmp));
            dispatch(setGymLoadingState('successful'));

            return;
        }

        dispatch(setGymLoadingState('rejected'));

        return;
    };

export const sendEmail =
    (gymName: string, message: string) =>
    async (_: AppDispatch, getState: GetAppState): Promise<boolean> => {
        const state = getState();

        const gymId = SelectGymIdByInternalId(state, gymName);

        if (!gymId) {
            return false;
        }

        const { status } = await postSendMail(message, gymId);

        return status === 201;
    };

/*
export const loadOffers =
    (gymName: string) =>
    async (dispatch: AppDispatch): Promise<void> => {
        dispatch(setOffersLoadingState('pending'));

        let data: Gym | undefined;

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
