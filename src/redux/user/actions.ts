import { AppDispatch, GetAppState } from '../store';
import { setSendOrderLoadingState, setSubscriptionId } from './slice';
import { postSendSubscription, postSubscription } from '../../api/subscriptions/post';
import { selectOfferById } from '../gym/selectors';
import { selectSubscriptionId, selectUser } from './selectors';
import { patchSubscription } from '../../api/subscriptions/patch';

export const finishOrder =
    (gymId: string) =>
    async (dispatch: AppDispatch, getState: GetAppState): Promise<void> => {
        const state = getState();

        const subscriptionId = selectSubscriptionId(state);

        if (!subscriptionId) {
            return;
        }

        dispatch(setSendOrderLoadingState('pending'));

        const { status } = await postSendSubscription(subscriptionId, gymId);

        if (status === 201) {
            dispatch(setSendOrderLoadingState('successful'));

            return;
        }

        dispatch(setSendOrderLoadingState('rejected'));
    };

interface CreateSubscriptionOptions {
    gymName: string;
    offerId: string;
}

export const createSubscription =
    ({ offerId, gymName }: CreateSubscriptionOptions) =>
    async (dispatch: AppDispatch, getState: GetAppState): Promise<void> => {
        const state = getState();

        const offer = selectOfferById(state, gymName, offerId);

        const { data, status } = await postSubscription(
            {
                selectedOfferId: offerId,
                selectedOfferName: offer?.title
            },
            gymName
        );

        if (status === 200 && data) {
            dispatch(setSubscriptionId(data));
        }
    };

export const updateSubscription =
    (gymId: string) =>
    async (_: AppDispatch, getState: GetAppState): Promise<void> => {
        const state = getState();

        const {
            subscriptionId,
            iban,
            selectedOfferId,
            gender,
            number,
            birthday,
            postcode,
            street,
            place,
            owner,
            email,
            firstName,
            lastName
        } = selectUser(state);

        if (!subscriptionId) {
            return;
        }

        await patchSubscription(
            {
                birthday,
                gender,
                iban,
                email,
                firstName,
                lastName,
                owner,
                place,
                street,
                number,
                selectedOfferId,
                postcode
            },
            gymId,
            subscriptionId
        );
    };
