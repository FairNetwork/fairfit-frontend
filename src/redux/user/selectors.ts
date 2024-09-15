import type { RootState } from '../store';
import { User } from '../../types/user';
import { createSelector } from '@reduxjs/toolkit';

const selectUserState = (state: RootState) => state.user;

export const selectSelectedOfferName = (state: RootState) =>
    selectUserState(state).selectedOfferName;

export const selectSendOrderLoadingState = (state: RootState) =>
    selectUserState(state).sendOrderLoadingState;

export const selectUser = (state: RootState): User => selectUserState(state).user;

export const selectIsButtonDisabled = createSelector([selectUser], (user) => {
    const {
        email,
        gender,
        number,
        lastName,
        firstName,
        birthday,
        place,
        postcode,
        street,
        owner,
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
        typeof gender === 'number' &&
        iban
    );
});
