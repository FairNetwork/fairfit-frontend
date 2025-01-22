import SubHeading from './sub-heading/SubHeading';
import './sidebar.scss';
import SidebarItem from './sidebar-item/SidebarItem';
import Logo from './logo/Logo';
import logo from '../../../assets/fairfit_logo.png';
import { useGymTypeIcons } from '../../../hooks/gym';
import { GymType } from '../../../types/gym';
import User from './user/User';
import ScrollContainer from './scroll-container/ScrollContainer';

const Sidebar = () => {
    const { getIconForGymType } = useGymTypeIcons();

    return (
        <div className="sidebar">
            <Logo src={logo}>
                <div className="sidebar__logo">FairFit</div>
            </Logo>
            <SubHeading>
                <SidebarItem text="Home" icon="fas fa-house" route="/" />
            </SubHeading>
            <SubHeading heading="Verlauf">
                <ScrollContainer>
                    <SidebarItem
                        text="EasyFitness"
                        route="/easyfitness"
                        icon={getIconForGymType(GymType.GYM)}
                    />
                    <SidebarItem
                        text="Eintracht Ahaus"
                        route="/eintracht_ahaus"
                        icon={getIconForGymType(GymType.FOOTBALL)}
                    />
                </ScrollContainer>
            </SubHeading>
            <User />
        </div>
    );
};

Sidebar.displayName = 'Sidebar';

export default Sidebar;
