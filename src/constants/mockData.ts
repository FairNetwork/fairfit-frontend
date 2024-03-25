import { Gym } from '../types/gym';
import { Offer } from '../types/offer';

const TESTABONNEMENTS2: Offer[] = [
    {
        id: '243244132412412',
        color: 'rgb(217, 140, 139)',
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
        id: '4636252545',
        color: 'rgb(217, 140, 139)',
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
        id: '36363352533',
        color: 'rgb(217, 140, 139)',
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
    offers: [],
    agbs: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a dapibus turpis, ut consequat magna. Mauris commodo faucibus lacus ut facilisis. Donec feugiat faucibus nibh id porta. Vestibulum lacinia ultricies cursus. Vestibulum ullamcorper tellus quis tristique auctor. Donec dictum laoreet ex in dignissim. Nam imperdiet tempus dapibus. Nam a lacus non ipsum mollis efficitur. Curabitur sed ornare nunc, eget vehicula lectus. Etiam interdum semper urna ut porta. Phasellus vitae ante elit.',
    logo: 'https://easyfitness.team/wp-content/uploads/2016/10/Easyfitness-logo.png',
    abonnements: TESTABONNEMENTS2,
    location: {
        address: 'EasyFitness Ahaus, Markt 22, 48683 Ahaus',
        coordinates: [52.0758695, 7.0073389]
    },
    id: 'easyfitness'
};
