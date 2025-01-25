import './statistic.scss';
import { LineChart } from '@mui/x-charts';
import { convertStatisticsTimeline } from '../../../../utils/statistic';
import { useStatistic } from '../../../../hooks/statistic';
import { FC, useMemo } from 'react';
import { StatisticType } from '../../../../types/statistic';

interface StatisticProps {
    text: string;
    type: StatisticType;
}

const Statistic: FC<StatisticProps> = ({ text, type }) => {
    const data = useStatistic(type);

    const { current, difference } = useMemo(() => {
        if (!data) {
            return { current: 0, difference: 0 };
        }

        const current = data[data.length - 1]?.total;
        const prev = data[data.length - 2]?.total;
        const difference = current - prev;

        return { current, difference };
    }, [data]);

    if (!data) {
        return undefined;
    }

    return (
        <div className="statistic">
            <div className="statistic__text">
                {text
                    .replace('##current##', String(current))
                    .replace('##diff##', String(difference))
                    .replace('##diffText##', difference > 0 ? 'mehr' : 'weniger')}
            </div>
            {data && (
                <LineChart
                    xAxis={[
                        {
                            data: data.map(({ month }) => convertStatisticsTimeline(month)),
                            scaleType: 'point'
                        }
                    ]}
                    series={[{ data: data.map(({ total }) => total) }]}
                    height={300}
                    margin={{ top: 10, bottom: 20 }}
                />
            )}
        </div>
    );
};

Statistic.displayName = 'Statistic';

export default Statistic;
