import { StatisticEntry, StatisticType } from '../types/statistic';
import { useAppSelector } from './redux';
import { selectStatistics } from '../redux/gym/selectors';

export const useStatistic = (type: StatisticType): StatisticEntry[] | undefined => {
    const statistics = useAppSelector(selectStatistics);

    const currentStatistics = statistics?.find((statistic) => statistic.type === type);

    return currentStatistics?.entries;
};
