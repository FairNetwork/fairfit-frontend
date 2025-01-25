import { useMemo } from 'react';
import { GymType } from '../types/gym';

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
