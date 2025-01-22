import { StyledEngineProvider } from '@mui/material/styles';
import Statistic from './statistic/Statistic';
import './dashboardStatistics.scss';
import { StatisticType } from '../../../types/statistic';

const DashboardStatistics = () => {
    return (
        <div className="dashboard-statistics">
            <StyledEngineProvider injectFirst>
                <Statistic
                    type={StatisticType.REQUESTS}
                    text="Diesen Monat wurde deine Seite ##current## Mal aufgerufen, das sind ##diff## Aufrufe ##diffText## als im letzten Monat."
                />
                <Statistic
                    type={StatisticType.ABONNEMENTS}
                    text="Diesen Monat wurden ##current## Mitgliedschaften abgeschlossen, das sind ##diff## Aufrufe ##diffText## als im letzten Monat."
                />
            </StyledEngineProvider>
        </div>
    );
};

DashboardStatistics.displayName = 'DashboardStatistics';

export default DashboardStatistics;
