import { LineChart } from '@mui/x-charts';
import { useAppSelector } from '../../../../hooks/redux';
import { selectRequestStatistics } from '../../../../redux/statistics/selectors';
import { convertStatisticsTimeline } from '../../../../utils/text';
import './requests.scss';

const Requests = () => {
    const data = useAppSelector(selectRequestStatistics);

    const currentRequests = data[data.length - 1]?.totalRequests;
    const prevRequests = data[data.length - 2]?.totalRequests;
    const difference = currentRequests - prevRequests;

    return (
        <div className="requests">
            <h3>Seitenaufrufe</h3>
            <i>
                Diesen Monat wurde dein Studio {currentRequests} Mal aufgerufen, das sind{' '}
                {String(difference).replace('-', '')} Aufrufe {difference > 0 ? 'mehr' : 'weniger'}{' '}
                als im letzten Monat.
            </i>
            {data && (
                <LineChart
                    xAxis={[
                        {
                            data: data.map(({ month }) => convertStatisticsTimeline(month)),
                            scaleType: 'point'
                        }
                    ]}
                    series={[
                        {
                            data: data.map(({ totalRequests }) => totalRequests)
                        }
                    ]}
                    height={300}
                    margin={{ top: 10, bottom: 20 }}
                />
            )}
        </div>
    );
};

Requests.displayName = 'Requests';

export default Requests;
