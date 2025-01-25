import { IOpeningTimes, OpeningTimeType } from '../types/openingTimes';
import { useMemo, useState } from 'react';
import { ISocialMedia } from '../types/socialMedia';
import { useSocialMedia } from './socialMedia';
import { SOCIAL_MEDIA_DATA } from '../constants/socialMedia';
import { OPENING_TIMES_DATA } from '../constants/openingTimes';

export const useGroupedOpeningTimes = (openingTimes: IOpeningTimes[]) => {
    return useMemo(() => {
        const dayNames = ['Mo.', 'Di.', 'Mi.', 'Do.', 'Fr.', 'Sa.', 'So.', 'Feiertag'];

        const defaultTimes = Object.values(OpeningTimeType).reduce<IOpeningTimes[]>((acc, type) => {
            if (typeof type === 'number') {
                acc.push({
                    id: type.toString(),
                    type,
                    startTime: '',
                    endTime: '',
                    closed: true
                });
            }
            return acc;
        }, []);

        const completeTimes = [...defaultTimes, ...openingTimes].reduce<
            Record<number, IOpeningTimes>
        >((acc, time) => {
            acc[time.type] = time;
            return acc;
        }, {});

        // Gruppierung nach Zeitangaben
        const timeGroups = Object.values(completeTimes).reduce<Record<string, number[]>>(
            (acc, time) => {
                const key = time.closed ? 'closed' : `${time.startTime}-${time.endTime}`;
                acc[key] = acc[key] || [];
                acc[key].push(time.type);
                return acc;
            },
            {}
        );

        return Object.entries(timeGroups).map(([timeRange, days]) => {
            const dayLabels = days.map((day) => dayNames[day]);
            const holidays = days.includes(OpeningTimeType.HOLIDAY);

            // Feiertage immer separat anzeigen, wenn sie nicht geschlossen sind
            if (holidays && !timeRange.includes('closed')) {
                const nonHolidayDays = days.filter((day) => day !== OpeningTimeType.HOLIDAY);
                const nonHolidayLabels = nonHolidayDays.map((day) => dayNames[day]);
                const nonHolidayString =
                    nonHolidayLabels.length > 1
                        ? `${nonHolidayLabels[0]} - ${nonHolidayLabels[nonHolidayLabels.length - 1]}`
                        : nonHolidayLabels[0];

                return {
                    days: nonHolidayString ? `${nonHolidayString} & Feiertag` : 'Feiertag',
                    startTime: timeRange === 'closed' ? null : timeRange.split('-')[0],
                    endTime: timeRange === 'closed' ? null : timeRange.split('-')[1],
                    closed: timeRange === 'closed'
                };
            }

            const daysString =
                dayLabels.length > 1
                    ? `${dayLabels[0]} - ${dayLabels[dayLabels.length - 1]}`
                    : dayLabels[0];

            if (timeRange === 'closed') {
                return {
                    days: daysString,
                    startTime: null,
                    endTime: null,
                    closed: true
                };
            }

            const [startTime, endTime] = timeRange.split('-');
            return {
                days: daysString,
                startTime: startTime || null,
                endTime: endTime || null,
                closed: false
            };
        });
    }, [openingTimes]);
};

export const useOpeningTimeInput = (type: OpeningTimeType) => {
    const [openingTime, setOpeningTime] = useState<IOpeningTimes>({
        closed: true,
        id: 'tmp',
        type,
        startTime: '',
        endTime: ''
    });

    const { name } = useMemo(() => {
        return OPENING_TIMES_DATA[type] || {};
    }, [type]);

    // ToDo get data from state and update state

    const updateOpeningTime = ({
        startTime,
        endTime,
        closed
    }: {
        startTime?: string;
        endTime?: string;
        closed?: boolean;
    }) => {
        // ToDo dispatch new time
        setOpeningTime((prev) => ({
            ...prev,
            startTime: startTime ?? prev.startTime,
            endTime: endTime ?? prev.endTime,
            closed: typeof closed === 'boolean' ? closed : prev.closed
        }));
    };

    return { openingTime, updateOpeningTime, name };
};
