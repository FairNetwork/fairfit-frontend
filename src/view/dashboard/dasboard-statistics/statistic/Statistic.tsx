import './statistic.scss';
import { LineChart } from '@mui/x-charts';
import { convertStatisticsTimeline } from '../../../../utils/statistic';
import { useStatistic } from '../../../../hooks/statistic';
import { FC } from 'react';

interface StatisticProps {
    text: string;
}

const Statistic: FC<StatisticProps> = ({ text }) => {
    const data = useStatistic();

    const current = data[data.length - 1]?.totalRequests;
    const prev = data[data.length - 2]?.totalRequests;
    const difference = current - prev;

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
                    series={[{ data: data.map(({ totalRequests }) => totalRequests) }]}
                    height={300}
                    margin={{ top: 10, bottom: 20 }}
                />
            )}
        </div>
    );
};

Statistic.displayName = 'Statistic';

export default Statistic;
