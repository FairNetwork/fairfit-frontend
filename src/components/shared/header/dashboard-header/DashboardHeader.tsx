import './dashboardHeader.scss';
import Icon from '../../icon/Icon';
import { useIsMobile } from '../../../../hooks/environment';
import { useSidebarProvider } from '../../sidebar/SidebarProvider';

const DashboardHeader = () => {
    const isMobile = useIsMobile();
    const { updateIsOpen } = useSidebarProvider();

    const gymName = 'EasyFitness';

    return (
        <div className="dashboard-header">
            {isMobile && (
                <div id="sidebar-toggle">
                    <Icon
                        icon="fas fa-bars"
                        onClick={() =>
                            typeof updateIsOpen === 'function' ? updateIsOpen(true) : undefined
                        }
                    />
                </div>
            )}
            <div className="dashboard-header__name">{gymName}</div>
        </div>
    );
};

DashboardHeader.displayName = 'DashboardHeader';

export default DashboardHeader;
