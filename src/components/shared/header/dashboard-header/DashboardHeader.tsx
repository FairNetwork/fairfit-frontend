import './dashboardHeader.scss';

const DashboardHeader = () => {
    const gymName = 'EasyFitness';

    return (
        <div className="dashboard-header">
            <div className="dashboard-header__name">{gymName}</div>
        </div>
    );
};

DashboardHeader.displayName = 'DashboardHeader';

export default DashboardHeader;
