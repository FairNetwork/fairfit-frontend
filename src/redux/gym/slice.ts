import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Gym, GymType } from '../../types/gym';

type LoadingState = 'none' | 'pending' | 'rejected' | 'successful';

export interface GymState {
    history: Gym['id'][];
    gyms: { [key: Gym['id']]: Gym };
}

const initialState: GymState = {
    history: [],
    gyms: {
        easyfitness: {
            name: 'EasyFitness',
            id: 'easyfitness',
            type: GymType.GYM,
            address: 'Ahaus',
            image: 'https://images.stockcake.com/public/a/4/f/a4fb5f0b-ff65-4b44-8de8-e9d53c5c0a7f_large/intense-gym-workout-stockcake.jpg'
        },
        bodyfit: {
            name: 'BodyFit',
            id: 'bodyfit',
            type: GymType.GYM,
            address: 'Ahaus',
            image: 'https://images.stockcake.com/public/a/4/f/a4fb5f0b-ff65-4b44-8de8-e9d53c5c0a7f_large/intense-gym-workout-stockcake.jpg'
        },
        shield: {
            name: 'Shield',
            id: 'shield',
            type: GymType.GYM,
            address: 'Ahaus',
            image: 'https://images.stockcake.com/public/a/4/f/a4fb5f0b-ff65-4b44-8de8-e9d53c5c0a7f_large/intense-gym-workout-stockcake.jpg'
        },
        'clever-fit': {
            name: 'Clever Fit',
            id: 'clever-fit',
            type: GymType.GYM,
            address: 'Ahaus',
            image: 'https://images.stockcake.com/public/a/4/f/a4fb5f0b-ff65-4b44-8de8-e9d53c5c0a7f_large/intense-gym-workout-stockcake.jpg'
        },
        'eintracht-ahaus': {
            name: 'Eintracht Ahaus',
            id: 'eintracht-ahaus',
            type: GymType.FOOTBALL,
            address: 'Ahaus',
            image: 'https://play-lh.googleusercontent.com/MdQuO3eGMwkERzTrxlbNfbDQdvQUL6Rey-fLFzwpFqMnCnWdeJxmP9RGxIxWGbf9CH0=w648-h364-rw'
        },
        aquahaus: {
            name: 'AquAHAUS',
            id: 'aquahaus',
            type: GymType.SWIMMING,
            address: 'Ahaus',
            image: 'https://www.carpediem.life/files/article/schwimmen.jpg'
        }
    }
};

const slice = createSlice({
    initialState,
    name: 'gym',
    reducers: {
        addHistoryEntry(state, { payload }: PayloadAction<Gym['id']>) {
            if (!state.history.includes(payload)) {
                state.history.push(payload);
            }
        }
    }
});

export const { addHistoryEntry } = slice.actions;

export const gymReducer = slice.reducer;
