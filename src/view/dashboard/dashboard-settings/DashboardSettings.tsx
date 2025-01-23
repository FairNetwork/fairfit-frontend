import './dashboardSettings.scss';
import GeneralSettings from './general-settings/GeneralSettings';

const DashboardSettings = () => {
    return (
        <div className="dashboard-settings">
            <GeneralSettings />
        </div>
    );
};

DashboardSettings.displayName = 'DashboardSettings';

export default DashboardSettings;
