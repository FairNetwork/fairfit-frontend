import { Gym } from '../types/gym';
import { Offer } from '../types/offer';
import logo from '../assets/EasyLogo.png';

const TESTABONNEMENTS2: Offer[] = [
    {
        id: '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed',
        color: '#52ab98',
        title: 'Easy12',
        details: [
            '12 Monate Mindestvertragslaufzeit',
            'Getränkeflat',
            'Zugang zu allen Kursen',
            'Start-Up einmalig 49,99€',
            'Transponderpfand einmalig 20,00€',
            '2x jährlich Trainings- und Servicepauschale in Höhe von 29,90€'
        ],
        price: 39.99,
        isOffer: false
    },
    {
        id: '2f6db9af-974f-4d9a-b17a-6a5a88df3146',
        color: '#52ab98',
        title: 'Easy24',
        details: [
            '24 Monate Mindestvertragslaufzeit',
            'Getränkeflat',
            'Zugang zu allen Kursen',
            'Start-Up einmalig 49,99€',
            'Transponderpfand einmalig 20,00€',
            '2x jährlich Trainings- und Servicepauschale in Höhe von 29,90€'
        ],
        price: 29.99,
        isOffer: false
    },
    {
        id: '3ec1baca-33a8-4f49-a22e-7a74d6d3f031',
        color: '#52ab98',
        title: 'Easy Flex',
        details: [
            '1 Monat Mindestvertragslaufzeit',
            'Getränkeflat',
            'Zugang zu allen Kursen',
            'Start-Up einmalig 49,99€',
            'Transponderpfand einmalig 20,00€',
            '2x jährlich Trainings- und Servicepauschale in Höhe von 29,90€'
        ],
        price: 49.99,
        isOffer: false
    }
];

const TESTOFFERS: Offer[] = [
    {
        id: '3ec1baca-13a8-4f49-a22e-7a74d6d3f031',
        color: '#222838',
        title: '2 Monate GRATIS',
        details: [
            '1 Monat Mindestvertragslaufzeit',
            'Getränkeflat',
            'Zugang zu allen Kursen',
            'Start-Up einmalig 49,99€',
            'Transponderpfand einmalig 20,00€',
            '2x jährlich Trainings- und Servicepauschale in Höhe von 29,90€'
        ],
        price: 0.0,
        duration: 2,
        priceAfterDuration: 29.99,
        isOffer: true
    }
];

export const EASYFITNESS: Gym = {
    name: 'EasyFitness',
    contact: {
        email: 'ahaus@easyfitness-group.de',
        phone: '02561/896400',
        socialMedia: {
            instagram: 'easyfitness.ahaus',
            youtube: 'EASYFITNESSclubs',
            facebook: 'EasyfitnessAhaus'
        }
    },
    offers: TESTOFFERS,
    agbs: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a dapibus turpis, ut consequat magna. Mauris commodo faucibus lacus ut facilisis. Donec feugiat faucibus nibh id porta. Vestibulum lacinia ultricies cursus. Vestibulum ullamcorper tellus quis tristique auctor. Donec dictum laoreet ex in dignissim. Nam imperdiet tempus dapibus. Nam a lacus non ipsum mollis efficitur. Curabitur sed ornare nunc, eget vehicula lectus. Etiam interdum semper urna ut porta. Phasellus vitae ante elit.',
    logo,
    abonnements: TESTABONNEMENTS2,
    location: {
        address: 'EasyFitness Ahaus, Markt 22, 48683 Ahaus',
        coordinates: [52.0758695, 7.0073389]
    },
    internalId: 'easyfitness',
    id: ''
};
