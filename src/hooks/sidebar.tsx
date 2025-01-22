import SubHeading from '../components/shared/sidebar/sub-heading/SubHeading';
import SidebarItem from '../components/shared/sidebar/sidebar-item/SidebarItem';

export const useSidebarDashboardContent = () => {
    const isLoggedIn = true;

    if (!isLoggedIn) {
        return undefined;
    }

    return (
        <SubHeading heading="Dashboard">
            <SidebarItem route="" text="Einstellungen" icon="fas fa-gear" />
            <SidebarItem route="" text="Abonnements" icon="fas fa-boxes-stacked" />
            <SidebarItem route="" text="Leistungen" icon="fas fa-bolt" />
            <SidebarItem route="" text="SocialMedia" icon="fas fa-hashtag" isDisabled />
            <SidebarItem
                route="/easyfitness/dashboard/statistics"
                text="Statistiken"
                icon="fas fa-chart-simple"
            />
        </SubHeading>
    );
};
