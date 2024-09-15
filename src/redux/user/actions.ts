import { AppDispatch, GetAppState } from '../store';
import { selectSelectedOfferName, selectUser } from './selectors';
import { setUser } from './slice';
import { postSubscription } from '../../api/subscriptions/post';
import { selectCurrentGymId } from '../gym/selectors';

export const sendSubscription =
    () =>
    async (dispatch: AppDispatch, getState: GetAppState): Promise<void> => {
        const state = getState();

        const user = selectUser(state);
        const abonnementName = selectSelectedOfferName(state);
        const internalId = selectCurrentGymId(state);

        if (!user || !abonnementName || !internalId) {
            return;
        }

        const { status } = await postSubscription({ user, abonnementName, internalId });

        if (status === 201) {
            dispatch(setUser({}));
        }
    };
