import { GetGymResult } from '../api/gym/get';

export const GYMS: GetGymResult[] = [
    {
        id: '1',
        name: 'GymFit',
        email: 'info@gymfit.com',
        location: { address: 'Berlin', coordinates: [0, 0] }
    },
    {
        id: '2',
        name: 'PowerHouse Gym',
        email: 'contact@powerhousegym.com',
        location: { address: 'München', coordinates: [0, 0] }
    },
    {
        id: '3',
        name: 'Urban Fitness',
        email: 'support@urbanfitness.com',
        location: { address: 'Hamburg', coordinates: [0, 0] }
    },
    {
        id: '4',
        name: 'Flex & Fit',
        email: 'hello@flexfit.com',
        location: { address: 'Köln', coordinates: [0, 0] }
    },
    {
        id: '5',
        name: 'StrongLife Gym',
        email: 'admin@stronglifegym.com',
        location: { address: 'Frankfurt', coordinates: [0, 0] }
    }
];
