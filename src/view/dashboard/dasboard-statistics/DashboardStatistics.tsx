import { StyledEngineProvider } from '@mui/material/styles';
import Statistic from './statistic/Statistic';
import './dashboardStatistics.scss';

const DashboardStatistics = () => {
    return (
        <div className="dashboard-statistics">
            <StyledEngineProvider injectFirst>
                <Statistic text="Diesen Monat wurde deine Seite ##current## Mal aufgerufen, das sind ##diff## Aufrufe ##diffText## als im letzten Monat." />
            </StyledEngineProvider>
        </div>
    );
};

DashboardStatistics.displayName = 'DashboardStatistics';

export default DashboardStatistics;
