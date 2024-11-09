import { LineChart } from '@mui/x-charts';
import { useAppSelector } from '../../../../hooks/redux';
import { selectAbonnementStatistics } from '../../../../redux/statistics/selectors';
import { convertStatisticsTimeline } from '../../../../utils/text';
import './abonnements.scss';

const Abonnements = () => {
    const data = useAppSelector(selectAbonnementStatistics);

    const currentAbonnements = data[data.length - 1]?.totalRequests;
    const prevAbonnements = data[data.length - 2]?.totalRequests;
    const difference = currentAbonnements - prevAbonnements;

    return (
        <div className="requests">
            <h3>Abgeschlossene Mitgliedschaften</h3>
            <i>
                Diesen Monat wurden {currentAbonnements} Mitgliedschaften abgeschlossen, das sind{' '}
                {String(difference).replace('-', '')} {difference > 0 ? 'mehr' : 'weniger'} als im
                letzten Monat.
            </i>
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

Abonnements.displayName = 'Abonnements';

export default Abonnements;
