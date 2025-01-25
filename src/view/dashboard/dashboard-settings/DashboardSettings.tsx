import './dashboardSettings.scss';
import GeneralSettings from './general-settings/GeneralSettings';
import SocialMediaSettings from './social-media-settings/SocialMediaSettings';
import OpeningTimesSettings from './opening-times-settings/OpeningTimesSettings';

const DashboardSettings = () => {
    return (
        <div className="dashboard-settings">
            <GeneralSettings />
            <SocialMediaSettings />
            <OpeningTimesSettings />
        </div>
    );
};

DashboardSettings.displayName = 'DashboardSettings';

export default DashboardSettings;
