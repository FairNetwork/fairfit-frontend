import * as React from 'react';
import { Navigation } from '@toolpad/core/AppProvider';
import { extendTheme } from '@mui/material/styles';
import Icon from '../components/shared/icon/Icon';

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
        icon: <Icon icon="bi bi-instagram" size={20} />
    },
    {
        segment: 'facebook',
        title: 'Facebook',
        icon: <Icon icon="bi bi-facebook" size={20} />
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
        icon: <Icon icon="bi bi-bar-chart" size={20} />
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
