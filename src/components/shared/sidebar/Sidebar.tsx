import SubHeading from './sub-heading/SubHeading';
import SidebarItem from './sidebar-item/SidebarItem';
import Logo from './logo/Logo';
import logo from '../../../assets/fairfit_logo.png';
import User from './user/User';
import ScrollContainer from './scroll-container/ScrollContainer';
import { useSidebarDashboardContent, useSidebarHistoryContent } from '../../../hooks/sidebar';
import './sidebar.scss';

const Sidebar = () => {
    const dashboardContent = useSidebarDashboardContent();
    const historyContent = useSidebarHistoryContent();

    return (
        <div className="sidebar">
            <Logo src={logo}>
                <div className="sidebar__logo">FairFit</div>
            </Logo>
            <SubHeading>
                <SidebarItem text="Home" icon="fas fa-house" route="/" />
            </SubHeading>
            <SubHeading heading="Verlauf">
                <ScrollContainer>{historyContent}</ScrollContainer>
            </SubHeading>
            {dashboardContent}
            <User />
        </div>
    );
};

Sidebar.displayName = 'Sidebar';

export default Sidebar;
