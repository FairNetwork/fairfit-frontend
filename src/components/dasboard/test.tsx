import * as React from 'react';
import { extendTheme, styled } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import DescriptionIcon from '@mui/icons-material/Description';
import LayersIcon from '@mui/icons-material/Layers';
import { AppProvider, Branding, Navigation, Router } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import Grid from '@mui/material/Grid2';
import Icon from '../shared/icon/Icon';
import { useAppSelector } from '../../hooks/redux';
import { selectGymName } from '../../redux/gym/selectors';

const NAVIGATION: Navigation = [
    {
        kind: 'header',
        title: 'HomePage'
    },
    {
        segment: 'studio',
        title: 'Studio',
        icon: <Icon icon="bi bi-house-gear" size={20} />
    },
    {
        segment: 'abonnements',
        title: 'Abonnements',
        icon: <Icon icon="bi bi-bag" size={20} />
    },
    {
        segment: 'benefits',
        title: 'Leistungen',
        icon: <Icon icon="bi bi-lightning-charge" size={20} />
    },
    {
        kind: 'divider'
    },
    {
        kind: 'header',
        title: 'Analytics'
    },
    {
        segment: 'reports',
        title: 'Reports',
        icon: <BarChartIcon />,
        children: [
            {
                segment: 'sales',
                title: 'Sales',
                icon: <DescriptionIcon />
            },
            {
                segment: 'traffic',
                title: 'Traffic',
                icon: <DescriptionIcon />
            }
        ]
    },
    {
        segment: 'integrations',
        title: 'Integrations',
        icon: <LayersIcon />
    }
];

const demoTheme = extendTheme({
    colorSchemes: {
        dark: {
            palette: {
                primary: { main: '#03DAC5' },
                background: {
                    default: '#121212',
                    paper: '#121212'
                }
            }
        }
    },
    colorSchemeSelector: 'class',
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 600,
            lg: 1200,
            xl: 1536
        }
    }
});

function useDemoRouter(initialPath: string): Router {
    const [pathname, setPathname] = React.useState(initialPath);

    const router = React.useMemo(() => {
        return {
            pathname,
            searchParams: new URLSearchParams(),
            navigate: (path: string | URL) => setPathname(String(path))
        };
    }, [pathname]);

    return router;
}

const Skeleton = styled('div')<{ height: number }>(({ theme, height }) => ({
    backgroundColor: theme.palette.action.hover,
    borderRadius: theme.shape.borderRadius,
    height,
    content: '" "'
}));

export default function DashboardLayoutBasic(props: any) {
    const gymName = useAppSelector(selectGymName);

    const router = useDemoRouter('/dashboard');

    const branding: Branding = {
        logo: <div />,
        title: gymName ?? 'FariFit'
    };

    return (
        <AppProvider navigation={NAVIGATION} router={router} branding={branding} theme={demoTheme}>
            <DashboardLayout>
                <PageContainer>
                    <Grid container spacing={1}>
                        <Grid size={5} />
                        <Grid size={12}>
                            <Skeleton height={14} />
                        </Grid>
                        <Grid size={12}>
                            <Skeleton height={14} />
                        </Grid>
                        <Grid size={4}>
                            <Skeleton height={100} />
                        </Grid>
                        <Grid size={8}>
                            <Skeleton height={100} />
                        </Grid>

                        <Grid size={12}>
                            <Skeleton height={150} />
                        </Grid>
                        <Grid size={12}>
                            <Skeleton height={14} />
                        </Grid>

                        <Grid size={3}>
                            <Skeleton height={100} />
                        </Grid>
                        <Grid size={3}>
                            <Skeleton height={100} />
                        </Grid>
                        <Grid size={3}>
                            <Skeleton height={100} />
                        </Grid>
                        <Grid size={3}>
                            <Skeleton height={100} />
                        </Grid>
                    </Grid>
                </PageContainer>
            </DashboardLayout>
        </AppProvider>
    );
}
