import SubHeading from '../components/shared/sidebar/sub-heading/SubHeading';
import SidebarItem from '../components/shared/sidebar/sidebar-item/SidebarItem';
import { useMemo } from 'react';
import { GymType } from '../types/gym';
import { useGymTypeIcons } from './gym';
import { useAppSelector } from './redux';
import {
    selectAbonnementCount,
    selectBenefitCount,
    selectGymsFromHistory,
    selectSubscriptionType
} from '../redux/gym/selectors';
import ScrollContainer from '../components/shared/sidebar/scroll-container/ScrollContainer';
import { getSidebarBadge } from '../utils/sidebar';
import { PricingType } from '../types/pricing';

export const useSidebarDashboardContent = () => {
    const benefitCount = useAppSelector(selectBenefitCount);
    const abonnementCount = useAppSelector(selectAbonnementCount);
    const subscriptionType = useAppSelector(selectSubscriptionType);

    const isLoggedIn = true;
    const gymId = 'easyfitness';

    if (!isLoggedIn) {
        return undefined;
    }

    const isDefaultPlan = [PricingType.ATHLETE].includes(subscriptionType);
    const middleAccess = [PricingType.LEGEND, PricingType.CHAMPION].includes(subscriptionType);
    const fullAccess = [PricingType.LEGEND].includes(subscriptionType);

    const benefitBadge = getSidebarBadge(benefitCount, isDefaultPlan);
    const abonnementBadge = getSidebarBadge(abonnementCount, isDefaultPlan);

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
                badgeText={abonnementBadge.text}
                badgeColor={abonnementBadge.color}
            />
            <SidebarItem
                route={`/${gymId}/dashboard/benefits`}
                text="Leistungen"
                icon="fas fa-bolt"
                badgeText={benefitBadge.text}
                badgeColor={benefitBadge.color}
            />
            <SidebarItem
                route={`/${gymId}/dashboard/socialmedia`}
                text="SocialMedia"
                icon="fas fa-hashtag"
                badgeText={fullAccess ? undefined : 'Legend'}
                badgeIcon={fullAccess ? undefined : 'fas fa-crown'}
            />
            <SidebarItem
                route={`/${gymId}/dashboard/statistics`}
                text="Statistiken"
                icon="fas fa-chart-simple"
                badgeText={middleAccess ? undefined : 'Champion'}
                badgeIcon={middleAccess ? undefined : 'fas fa-crown'}
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
