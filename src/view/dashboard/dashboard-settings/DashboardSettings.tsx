import './dashboardSettings.scss';
import GeneralSettings from './general-settings/GeneralSettings';
import SocialMediaSettings from './social-media-settings/SocialMediaSettings';

const DashboardSettings = () => {
    return (
        <div className="dashboard-settings">
            <GeneralSettings />
            <SocialMediaSettings />
        </div>
    );
};

DashboardSettings.displayName = 'DashboardSettings';

export default DashboardSettings;
