import SubHeading from '../components/shared/sidebar/sub-heading/SubHeading';
import SidebarItem from '../components/shared/sidebar/sidebar-item/SidebarItem';

export const useSidebarDashboardContent = () => {
    const isLoggedIn = true;
    const gymId = 'easyfitness';

    if (!isLoggedIn) {
        return undefined;
    }

    return (
        <SubHeading heading="Dashboard">
            <SidebarItem
                route={`/${gymId}/dashboard/settings`}
                text="Einstellungen"
                icon="fas fa-gear"
            />
            <SidebarItem
                route={`/${gymId}/dashboard/abonnements`}
                text="Abonnements"
                icon="fas fa-boxes-stacked"
            />
            <SidebarItem
                route={`/${gymId}/dashboard/benefits`}
                text="Leistungen"
                icon="fas fa-bolt"
            />
            <SidebarItem
                route={`/${gymId}/dashboard/socialmedia`}
                text="SocialMedia"
                icon="fas fa-hashtag"
                isDisabled
            />
            <SidebarItem
                route={`/${gymId}/dashboard/statistics`}
                text="Statistiken"
                icon="fas fa-chart-simple"
            />
        </SubHeading>
    );
};
