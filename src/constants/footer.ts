import { FooterItem, IUtil } from '../types/footer';

export const HOME_FOOTER_ITEMS: FooterItem[] = [
    { id: '1', name: 'Impressum', path: 'impressum' },
    { id: '2', name: 'Datenschutz', path: 'data-protection' },
    { id: '3', name: 'Allgemein', path: 'general' },
    { id: '4', name: 'Studio registrieren', path: 'register-studio' },
    { id: '5', name: 'Q&A', path: 'q-and-a' }
];

export const GYM_FOOTER_ITEMS: FooterItem[] = [
    { id: '1', name: 'Impressum', path: 'impressum' },
    { id: '2', name: 'Datenschutz', path: 'data-protection' },
    { id: '3', name: 'AGB', path: 'terms-conditions' },
    { id: '4', name: 'Widerruf', path: 'revocation' }
];

export const UTILS: IUtil[] = [
    { route: '/utility/data-protection', text: 'Datenschutz' },
    { route: '/utility/impressum', text: 'Impressum' },
    { route: '/utility/general', text: 'Allgemein' }
];
