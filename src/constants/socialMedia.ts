import { SocialMediaType } from '../types/socialMedia';

export const SOCIAL_MEDIA_DATA = {
    [SocialMediaType.INSTAGRAM]: {
        icon: 'fab fa-instagram',
        baseUrl: 'https://www.instagram.com/'
    },
    [SocialMediaType.FACEBOOK]: {
        icon: 'fab fa-facebook',
        baseUrl: 'https://www.facebook.com/'
    },
    [SocialMediaType.TIKTOK]: {
        icon: 'fab fa-tiktok',
        baseUrl: 'https://www.tiktok.com/@'
    },
    [SocialMediaType.YOUTUBE]: {
        icon: 'fan fa-youtube',
        baseUrl: 'https://www.youtube.com/'
    },
    [SocialMediaType.TWITTER]: {
        icon: 'fab fa-x-twitter',
        baseUrl: 'https://twitter.com/'
    }
};
