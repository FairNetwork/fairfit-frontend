import { useMemo } from 'react';
import { GymType } from '../types/gym';
import { useLocation } from 'react-router-dom';

export const useGymTypeIcons = () => {
    const gymTypeIcons = useMemo<Record<GymType, string>>(
        () => ({
            [GymType.GYM]: 'fas fa-dumbbell',
            [GymType.FOOTBALL]: 'fas fa-futbol',
            [GymType.VOLLEYBALL]: 'fas fa-volleyball',
            [GymType.BASEBALL]: 'fas fa-baseball',
            [GymType.TABLE_TENNIS]: 'fas fa-table-tennis-paddle-ball',
            [GymType.AMERICAN_FOOTBALL]: 'fas fa-football',
            [GymType.BASKETBALL]: 'fas fa-basketball',
            [GymType.GOLF]: 'fas fa-golf-ball-tee',
            [GymType.BOWLING]: 'fas fa-bowling-ball',
            [GymType.SWIMMING]: 'fas fa-person-swimming',
            [GymType.HOCKEY]: 'fas fa-hockey-puck'
        }),
        []
    );

    const getIconForGymType = (type: GymType): string => {
        return gymTypeIcons[type];
    };

    return { getIconForGymType };
};

export const useGymRoute = () => {
    const location = useLocation();

    const route = location.pathname;

    const startIndex = route.indexOf('/') + 1;
    const endIndex = route.indexOf('/', startIndex);

    if (endIndex === -1) {
        return route.substring(startIndex).toLowerCase();
    } else {
        return route.substring(startIndex, endIndex).toLowerCase();
    }
};
