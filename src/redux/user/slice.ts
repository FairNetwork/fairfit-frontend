import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Offer } from '../../types/offer';

type LoadingState = 'none' | 'pending' | 'rejected' | 'successful';

export interface UserState {
    gender: string;
    firstName: string;
    lastName: string;
    street: string;
    number?: number;
    place: string;
    postcode: string;
    birthday: string;
    email: string;
    iban: string;
    owner: string;
    selectedOfferId?: Offer['id'];
    areAgbsAccepted: boolean;
    sendOrderLoadingState: LoadingState;
    subscriptionId?: string;
}

const initialState: UserState = {
    email: '',
    birthday: '',
    firstName: '',
    gender: '',
    iban: '',
    lastName: '',
    owner: '',
    postcode: '',
    place: '',
    street: '',
    selectedOfferId: undefined,
    areAgbsAccepted: false,
    sendOrderLoadingState: 'none'
};

const slice = createSlice({
    initialState,
    name: 'user',
    reducers: {
        setGender(state, { payload }: PayloadAction<UserState['gender']>) {
            state.gender = payload;
        },
        setPostcode(state, { payload }: PayloadAction<UserState['postcode']>) {
            state.postcode = payload;
        },
        setIban(state, { payload }: PayloadAction<UserState['iban']>) {
            state.iban = payload;
        },
        setNumber(state, { payload }: PayloadAction<UserState['number']>) {
            state.number = payload;
        },
        setStreet(state, { payload }: PayloadAction<UserState['street']>) {
            state.street = payload;
        },
        setPlace(state, { payload }: PayloadAction<UserState['place']>) {
            state.place = payload;
        },
        setOwner(state, { payload }: PayloadAction<UserState['owner']>) {
            state.owner = payload;
        },
        setLastName(state, { payload }: PayloadAction<UserState['lastName']>) {
            state.lastName = payload;
        },
        setFirstName(state, { payload }: PayloadAction<UserState['firstName']>) {
            state.firstName = payload;
        },
        setEmail(state, { payload }: PayloadAction<UserState['email']>) {
            state.email = payload;
        },
        setBirthday(state, { payload }: PayloadAction<UserState['birthday']>) {
            state.birthday = payload;
        },
        setSelectedOffer(state, { payload }: PayloadAction<UserState['selectedOfferId']>) {
            state.selectedOfferId = payload;
        },
        setAreAgbsAccepted(state, { payload }: PayloadAction<UserState['areAgbsAccepted']>) {
            state.areAgbsAccepted = payload;
        },
        setSubscriptionId(state, { payload }: PayloadAction<UserState['subscriptionId']>) {
            state.subscriptionId = payload;
        },
        setSendOrderLoadingState(
            state,
            { payload }: PayloadAction<UserState['sendOrderLoadingState']>
        ) {
            state.sendOrderLoadingState = payload;
        }
    }
});

export const {
    setSendOrderLoadingState,
    setSubscriptionId,
    setEmail,
    setGender,
    setBirthday,
    setFirstName,
    setLastName,
    setIban,
    setOwner,
    setPlace,
    setNumber,
    setStreet,
    setSelectedOffer,
    setPostcode,
    setAreAgbsAccepted
} = slice.actions;

export const userReducer = slice.reducer;
