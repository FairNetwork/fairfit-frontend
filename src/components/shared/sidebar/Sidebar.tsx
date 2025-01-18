import SubHeading from './sub-heading/SubHeading';
import './sidebar.scss';
import SidebarItem from './sidebar-item/SidebarItem';
import Logo from './logo/Logo';
import logo from '../../../assets/fairfit_logo.png';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <Logo src={logo}>
                <div className="sidebar__logo">FairFit</div>
            </Logo>
            <SubHeading>
                <SidebarItem text="Home" icon="bi bi-house" route="/" />
            </SubHeading>
            <SubHeading heading="History">
                <SidebarItem text="Home" route="/easyfitness" />
            </SubHeading>
        </div>
    );
};

Sidebar.displayName = 'Sidebar';

export default Sidebar;
