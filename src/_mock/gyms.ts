import { Gym, GymType } from '../types/gym';
import { SocialMediaType } from '../types/socialMedia';
import { OpeningTimeType } from '../types/openingTimes';
import { StatisticType } from '../types/statistic';

export const GYM_MOCK_DATA: { [key: Gym['id']]: Gym } = {
    easyfitness: {
        name: 'EasyFitness',
        id: 'easyfitness',
        type: GymType.GYM,
        address: 'Ahaus',
        image: 'https://images.stockcake.com/public/a/4/f/a4fb5f0b-ff65-4b44-8de8-e9d53c5c0a7f_large/intense-gym-workout-stockcake.jpg',
        abonnements: [
            {
                id: 'abonnement',
                title: 'Abonnement',
                isOffer: true,
                price: 23.34,
                details: [{ id: 'wewe', detail: 'fdsfsd' }]
            }
        ],
        benefits: [
            { id: 'benefit', imageUrl: 'https://www.carpediem.life/files/article/schwimmen.jpg' }
        ],
        openingTimes: [
            {
                id: 'dfsfsd',
                type: OpeningTimeType.MONDAY,
                startTime: '12:34',
                endTime: '12:34',
                closed: false
            }
        ],
        socialMedia: [
            { id: 'sfsf', type: SocialMediaType.INSTAGRAM, userName: 'Test' },
            { id: 'fd', type: SocialMediaType.TIKTOK, userName: 'Test' }
        ],
        statistics: [
            {
                id: '2fdsf',
                type: StatisticType.ABONNEMENTS,
                entries: [
                    { month: '1/2025', total: 120 },
                    { month: '2/2025', total: 95 },
                    { month: '3/2025', total: 110 },
                    { month: '4/2025', total: 150 },
                    { month: '5/2025', total: 175 },
                    { month: '6/2025', total: 200 },
                    { month: '7/2025', total: 180 },
                    { month: '8/2025', total: 190 },
                    { month: '9/2025', total: 160 },
                    { month: '10/2025', total: 210 },
                    { month: '11/2025', total: 220 },
                    { month: '12/2025', total: 250 }
                ]
            },
            {
                id: 'sdfds',
                type: StatisticType.REQUESTS,
                entries: [
                    { month: '1/2025', total: 120 },
                    { month: '2/2025', total: 95 },
                    { month: '3/2025', total: 110 },
                    { month: '4/2025', total: 150 },
                    { month: '5/2025', total: 175 },
                    { month: '6/2025', total: 200 },
                    { month: '7/2025', total: 180 },
                    { month: '8/2025', total: 190 },
                    { month: '9/2025', total: 160 },
                    { month: '10/2025', total: 210 },
                    { month: '11/2025', total: 220 },
                    { month: '12/2025', total: 250 }
                ]
            }
        ]
    },
    bodyfit: {
        name: 'BodyFit',
        id: 'bodyfit',
        type: GymType.GYM,
        address: 'Ahaus',
        image: 'https://images.stockcake.com/public/a/4/f/a4fb5f0b-ff65-4b44-8de8-e9d53c5c0a7f_large/intense-gym-workout-stockcake.jpg',
        abonnements: [
            {
                id: 'abonnement',
                title: 'Abonnement',
                isOffer: true,
                price: 23.34,
                details: [{ id: 'wewe', detail: 'fdsfsd' }]
            }
        ],
        benefits: [
            { id: 'benefit', imageUrl: 'https://www.carpediem.life/files/article/schwimmen.jpg' }
        ],
        openingTimes: [
            {
                id: 'dfsfsd',
                type: OpeningTimeType.MONDAY,
                startTime: '12:34',
                endTime: '12:34',
                closed: false
            }
        ],
        socialMedia: [{ id: 'sfsf', type: SocialMediaType.INSTAGRAM, userName: 'Test' }]
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
};
