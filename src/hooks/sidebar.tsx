import SubHeading from '../components/shared/sidebar/sub-heading/SubHeading';
import SidebarItem from '../components/shared/sidebar/sidebar-item/SidebarItem';
import { useMemo } from 'react';
import { GymType } from '../types/gym';
import { useGymTypeIcons } from './gym';
import { useAppSelector } from './redux';
import { selectGymsFromHistory } from '../redux/gym/selectors';
import ScrollContainer from '../components/shared/sidebar/scroll-container/ScrollContainer';

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
                badgeText="Legend"
                badgeIcon="fas fa-crown"
            />
            <SidebarItem
                route={`/${gymId}/dashboard/statistics`}
                text="Statistiken"
                icon="fas fa-chart-simple"
                badgeText="Champion"
                badgeIcon="fas fa-crown"
            />
        </SubHeading>
    );
};

export const useSidebarHistoryContent = () => {
    const { getIconForGymType } = useGymTypeIcons();

    const gyms = useAppSelector(selectGymsFromHistory);

    return useMemo(() => {
        if (!gyms || !gyms.length) {
            return undefined;
        }

        const items = gyms.map(({ id, name, type }) => {
            return (
                <SidebarItem
                    key={`sidebar-item--${id}`}
                    text={name}
                    route={`/${id}`}
                    icon={getIconForGymType(type)}
                />
            );
        });

        return (
            <SubHeading heading="Verlauf">
                <ScrollContainer>{items}</ScrollContainer>
            </SubHeading>
        );
    }, [gyms]);
};
