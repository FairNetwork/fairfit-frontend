import type { RootState } from '../store';
import { createSelector } from '@reduxjs/toolkit';

const selectUserState = (state: RootState) => state.user;

export const selectUser = (state: RootState) => selectUserState(state);
export const selectSubscriptionId = (state: RootState) => selectUserState(state).subscriptionId;

export const selectSelectedOfferId = (state: RootState) => selectUserState(state).selectedOfferId;
export const selectSendOrderLoadingState = (state: RootState) =>
    selectUserState(state).sendOrderLoadingState;

export const selectIsDisabled = createSelector([selectUser], (user) => {
    const {
        email,
        firstName,
        lastName,
        owner,
        place,
        street,
        postcode,
        number,
        birthday,
        gender,
        iban
    } = user;

    return !(
        email &&
        firstName &&
        lastName &&
        owner &&
        place &&
        street &&
        postcode &&
        number &&
        birthday &&
        gender &&
        iban
    );
});
