// import { AppDispatch, GetAppState } from '../store';
// import {
//     setAreAgbsAccepted,
//     setSelectedOffer,
//     setSendOrderLoadingState,
//     setSubscriptionId
// } from './slice';
// import { postSendSubscription, postSubscription } from '../../api/subscriptions/post';
// import { selectOfferById } from '../gym/selectors';
// import { selectSubscriptionId, selectUser } from './selectors';
// import { putSubscription } from '../../api/subscriptions/put';
//
// export const finishOrder =
//     (gymInternalId?: string) =>
//     async (dispatch: AppDispatch, getState: GetAppState): Promise<void> => {
//         const state = getState();
//
//         if (!gymInternalId) {
//             return;
//         }
//
//         const subscriptionId = selectSubscriptionId(state);
//
//         const gymId = SelectGymIdByInternalId(state, gymInternalId);
//
//         if (!subscriptionId || !gymId) {
//             return;
//         }
//
//         dispatch(setSendOrderLoadingState('pending'));
//
//         const { status } = await postSendSubscription(subscriptionId, gymId);
//
//         if (status === 201) {
//             dispatch(setSendOrderLoadingState('successful'));
//
//             // Reset user
//             dispatch(setSubscriptionId(undefined));
//             dispatch(setSelectedOffer(undefined));
//             dispatch(setAreAgbsAccepted(false));
//
//             return;
//         }
//
//         dispatch(setSendOrderLoadingState('rejected'));
//     };
//
// interface CreateSubscriptionOptions {
//     gymName: string;
//     offerId: string;
// }
//
// export const createSubscription =
//     ({ offerId, gymName }: CreateSubscriptionOptions) =>
//     async (dispatch: AppDispatch, getState: GetAppState): Promise<void> => {
//         const state = getState();
//
//         const offer = selectOfferById(state, offerId, gymName);
//
//         const gymId = SelectGymIdByInternalId(state, gymName);
//
//         if (!gymId) {
//             return;
//         }
//
//         const { data, status } = await postSubscription(
//             {
//                 selectedOfferId: offerId,
//                 selectedOfferName: offer?.title
//             },
//             gymId
//         );
//
//         if (status === 201 && data) {
//             dispatch(setSubscriptionId(data));
//         }
//     };
//
// export const updateSubscription =
//     (gymName?: string) =>
//     async (_: AppDispatch, getState: GetAppState): Promise<void> => {
//         const state = getState();
//
//         if (!gymName) {
//             return;
//         }
//
//         const {
//             subscriptionId,
//             iban,
//             selectedOfferId,
//             gender,
//             number,
//             birthday,
//             postcode,
//             street,
//             place,
//             owner,
//             email,
//             firstName,
//             lastName
//         } = selectUser(state);
//
//         if (!selectedOfferId) {
//             return;
//         }
//
//         const offer = selectOfferById(state, selectedOfferId, gymName);
//
//         const gymId = SelectGymIdByInternalId(state, gymName);
//
//         if (!subscriptionId || !gymId) {
//             return;
//         }
//
//         let newGender;
//
//         switch (gender) {
//             case 'Männlich':
//                 newGender = 'male';
//                 break;
//             case 'Weiblich':
//                 newGender = 'female';
//                 break;
//             default:
//                 newGender = 'various';
//                 break;
//         }
//
//         await putSubscription(
//             {
//                 birthday: new Date(birthday),
//                 gender: newGender,
//                 iban,
//                 email,
//                 firstName,
//                 lastName,
//                 owner,
//                 place,
//                 street,
//                 number: Number(number),
//                 selectedOfferId,
//                 selectedOfferName: offer?.title,
//                 postcode
//             },
//             gymId,
//             subscriptionId
//         );
//     };
