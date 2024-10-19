import * as React from 'react';
import { AppProvider, Branding } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import { useAppSelector } from '../../hooks/redux';
import { selectGymName } from '../../redux/gym/selectors';
import { DASHBOARD_NAVIGATION, DASHBOARD_THEME } from '../../constants/dashboard';
import { useDashboardRouter } from '../../hooks/dashboard';
import { useMemo } from 'react';

export default function DashboardLayoutBasic() {
    const gymName = useAppSelector(selectGymName);

    const router = useDashboardRouter(`/studio`);

    const branding: Branding = useMemo(() => {
        return {
            logo: <div />,
            title: gymName ?? 'FariFit'
        };
    }, [gymName]);

    const content = useMemo(() => {
        switch (router.pathname) {
            case '/abonnements':
                return <div>2</div>;
            case '/studio':
            default:
                return <div>1</div>;
        }
    }, [router.pathname]);

    return (
        <AppProvider
            navigation={DASHBOARD_NAVIGATION}
            router={router}
            branding={branding}
            theme={DASHBOARD_THEME}>
            <DashboardLayout>
                <PageContainer>{content}</PageContainer>
            </DashboardLayout>
        </AppProvider>
    );
}
