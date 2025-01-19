import SubHeading from './sub-heading/SubHeading';
import './sidebar.scss';
import SidebarItem from './sidebar-item/SidebarItem';
import Logo from './logo/Logo';
import logo from '../../../assets/fairfit_logo.png';
import { useGymTypeIcons } from '../../../hooks/gym';
import { GymType } from '../../../types/gym';

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
            </SubHeading>
        </div>
    );
};

Sidebar.displayName = 'Sidebar';

export default Sidebar;
