import * as React from 'react';
import { Navigation } from '@toolpad/core/AppProvider';
import { extendTheme } from '@mui/material/styles';
import Icon from '../components/shared/icon/Icon';
import { Chip } from '@mui/material';
import { OpeningTimeType } from '../types/openingTimes';
import { IDashboard } from '../types/dashboard';

export const DASHBOARD_NAVIGATION: Navigation = [
    {
        kind: 'header',
        title: 'Einstellungen'
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
        title: 'Social Media'
    },
    {
        segment: 'instagram',
        title: 'Instagram',
        icon: <Icon icon="bi bi-instagram" size={20} />,
        action: <Chip label="Plus" color="primary" size="small" />
    },
    {
        segment: 'facebook',
        title: 'Facebook',
        icon: <Icon icon="bi bi-facebook" size={20} />,
        action: <Chip label="Plus" color="primary" size="small" />
    },
    {
        kind: 'divider'
    },
    {
        kind: 'header',
        title: 'Analytics'
    },
    {
        segment: 'social-media',
        title: 'Social Media',
        icon: <Icon icon="bi bi-diagram-2" size={20} />,
        action: <Chip label="Pro" color="primary" size="small" />,
        children: [
            {
                segment: 'analytics-instagram',
                title: 'Instagram',
                icon: <Icon icon="bi bi-instagram" size={20} />
            },
            {
                segment: 'analytics-facebook',
                title: 'Facebook',
                icon: <Icon icon="bi bi-facebook" size={20} />
            }
        ]
    },
    {
        segment: 'homepage',
        title: 'Homepage',
        icon: <Icon icon="bi bi-bar-chart" size={20} />,
        action: <Chip label="Pro" color="primary" size="small" />
    }
];

export const DASHBOARD_THEME = extendTheme({
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

export const OPENING_TIMES: OpeningTimeType[] = [
    OpeningTimeType.MONDAY,
    OpeningTimeType.TUESDAY,
    OpeningTimeType.WEDNESDAY,
    OpeningTimeType.THURSDAY,
    OpeningTimeType.FRIDAY,
    OpeningTimeType.SATURDAY,
    OpeningTimeType.SUNDAY,
    OpeningTimeType.HOLIDAY
];

export const DASHBOARD: IDashboard[] = [
    { icon: 'bi bi-house-gear', route: '/:gym/dashboard/gym', text: 'Studio' },
    { icon: 'bi bi-bag', route: '/:gym/dashboard/abonnements', text: 'Abonnements' },
    { icon: 'bi bi-lightning-charge', route: '/:gym/dashboard/benefits', text: 'Leistungen' },
    {
        icon: 'bi bi-phone',
        route: '/:gym/dashboard/social-media',
        text: 'Social-Media',
        children: [
            {
                icon: 'bi bi-instagram',
                route: '/:gym/dashboard/social-media/instagram',
                text: 'Instagram'
            },
            {
                icon: 'bi bi-facebook',
                route: '/:gym/dashboard/social-media/facebook',
                text: 'Facebook'
            }
        ]
    },
    {
        icon: 'bi bi-diagram-2',
        route: '/:gym/dashboard/analytics',
        text: 'Analytics',
        children: [
            {
                icon: 'bi bi-phone',
                route: '/:gym/dashboard/analytics/social-media',
                text: 'Social-Media'
            },
            {
                icon: 'bi bi-bar-chart',
                route: '/:gym/dashboard/analytics/homepage',
                text: 'Homepage'
            }
        ]
    }
];
