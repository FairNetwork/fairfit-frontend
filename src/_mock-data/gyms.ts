import { GetGymResult } from '../api/gym/get';
import { BenefitType, DayType, IGym } from '../types/gym';

export const GYMS_EXTENDED: IGym[] = [
    {
        id: '1',
        internalId: 'gymfit',
        name: 'GymFit',
        logo: 'https://example.com/gymfit-logo.png',
        image: 'https://example.com/gymfit-image.png',
        offers: [
            {
                id: 'offer-1',
                isOffer: true,
                color: 'red',
                title: 'Monthly Membership',
                details: ['Access to all equipment', 'Free group classes'],
                price: 29.99
            }
        ],
        abonnements: [
            {
                id: 'abon-1',
                isOffer: false,
                color: 'blue',
                title: 'Annual Membership',
                details: ['Unlimited access', 'Priority support', 'Free nutrition plan'],
                price: 299.99,
                duration: 12
            }
        ],
        benefits: [
            {
                id: 'benefit-1',
                imageUrl: 'https://example.com/gymfit-benefit-1.png',
                type: BenefitType.Equipment
            }
        ],
        contact: {
            phone: '+49 30 12345678',
            email: 'info@gymfit.com',
            socialMedia: {
                facebook: 'https://facebook.com/gymfit',
                instagram: 'https://instagram.com/gymfit'
            }
        },
        location: {
            address: 'Berlin, Germany',
            coordinates: [52.52, 13.405]
        },
        openingTimes: [
            {
                day: DayType.Monday,
                startTime: '06:00',
                endTime: '22:00'
            },
            {
                day: DayType.Tuesday,
                startTime: '06:00',
                endTime: '22:00'
            }
        ],
        hasLoaded: true
    },
    {
        id: '2',
        internalId: 'powerhouse_gym',
        name: 'PowerHouse Gym',
        logo: 'https://example.com/powerhouse-logo.png',
        image: 'https://example.com/powerhouse-image.png',
        offers: [
            {
                id: 'offer-2',
                isOffer: true,
                color: 'green',
                title: 'Weekly Pass',
                details: ['Access to all facilities', 'Includes one personal training session'],
                price: 19.99
            }
        ],
        abonnements: [
            {
                id: 'abon-2',
                isOffer: false,
                color: 'yellow',
                title: 'Quarterly Membership',
                details: ['Access to gym and swimming pool', '10% discount on merchandise'],
                price: 79.99,
                duration: 3
            }
        ],
        benefits: [
            {
                id: 'benefit-2',
                imageUrl: 'https://example.com/powerhouse-benefit-1.png',
                type: BenefitType.Courses
            }
        ],
        contact: {
            phone: '+49 89 98765432',
            email: 'contact@powerhousegym.com'
        },
        location: {
            address: 'München, Germany',
            coordinates: [48.1351, 11.582]
        },
        openingTimes: [
            {
                day: DayType.Saturday,
                startTime: '08:00',
                endTime: '20:00'
            },
            {
                day: DayType.Sunday,
                startTime: '08:00',
                endTime: '18:00'
            }
        ],
        hasLoaded: true
    },
    {
        id: '3',
        internalId: 'urban_fitness',
        name: 'Urban Fitness',
        logo: 'https://example.com/urbanfitness-logo.png',
        image: 'https://example.com/urbanfitness-image.png',
        offers: [
            {
                id: 'offer-3',
                isOffer: true,
                color: 'purple',
                title: 'Day Pass',
                details: ['Full-day access', 'Includes one group class'],
                price: 9.99
            }
        ],
        abonnements: [
            {
                id: 'abon-3',
                isOffer: false,
                color: 'orange',
                title: 'Bi-Annual Membership',
                details: ['Full access', 'Free water bottle on signup'],
                price: 149.99,
                duration: 6
            }
        ],
        benefits: [
            {
                id: 'benefit-3',
                imageUrl: 'https://example.com/urbanfitness-benefit-1.png',
                type: BenefitType.Otherwise
            }
        ],
        contact: {
            email: 'support@urbanfitness.com'
        },
        location: {
            address: 'Hamburg, Germany',
            coordinates: [53.5511, 9.9937]
        },
        openingTimes: [
            {
                day: DayType.Wednesday,
                startTime: '07:00',
                endTime: '21:00'
            },
            {
                day: DayType.Thursday,
                startTime: '07:00',
                endTime: '21:00'
            }
        ],
        hasLoaded: true
    }
];
