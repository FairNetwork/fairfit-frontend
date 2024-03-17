import { Gym } from '../types/gym';
import { Offer } from '../types/offer';

const TESTOFFERS1: Offer[] = [
    {
        id: 'dgsgs',
        color: 'rgb(217, 140, 139)',
        title: 'Happy Easter Special',
        duration: 1,
        details: 'Access to basic features',
        price: 20
    },
    {
        id: 'sgsgsgs',
        color: 'rgb(217, 140, 139)',
        title: 'Fit Starter',
        duration: 1,
        details: 'Access to basic features',
        price: 20
    }
];

const TESTABONNEMENTS2: Offer[] = [
    {
        id: 'jtfjhdfcg',
        color: 'rgb(217, 140, 139)',
        title: 'Basic Package',
        duration: 24,
        details: 'Access to basic features',
        price: 50,
        additionalPrices: {
            startUp: 10
        }
    },
    {
        id: 'testid',
        color: 'rgb(217, 140, 139)',
        title: 'Premium Package',
        duration: 24,
        details: 'Access to basic features',
        price: 70,
        additionalPrices: {
            startUp: 10
        }
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
    offers: TESTOFFERS1,
    agbs: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a dapibus turpis, ut consequat magna. Mauris commodo faucibus lacus ut facilisis. Donec feugiat faucibus nibh id porta. Vestibulum lacinia ultricies cursus. Vestibulum ullamcorper tellus quis tristique auctor. Donec dictum laoreet ex in dignissim. Nam imperdiet tempus dapibus. Nam a lacus non ipsum mollis efficitur. Curabitur sed ornare nunc, eget vehicula lectus. Etiam interdum semper urna ut porta. Phasellus vitae ante elit.',
    logo: 'https://easyfitness.team/wp-content/uploads/2016/10/Easyfitness-logo.png',
    abonnements: TESTABONNEMENTS2,
    location: {
        address: 'EasyFitness Ahaus, Markt 22, 48683 Ahaus',
        coordinates: [52.0758695, 7.0073389]
    },
    id: 'easyfitness'
};
