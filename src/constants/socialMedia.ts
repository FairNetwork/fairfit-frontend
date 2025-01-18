import { SocialMediaType } from '../types/socialMedia';

export const SOCIAL_MEDIA_DATA = {
    [SocialMediaType.INSTAGRAM]: {
        icon: 'bi-instagram',
        baseUrl: 'https://www.instagram.com/'
    },
    [SocialMediaType.FACEBOOK]: {
        icon: 'bi-facebook',
        baseUrl: 'https://www.facebook.com/'
    },
    [SocialMediaType.TIKTOK]: {
        icon: 'bi-tiktok',
        baseUrl: 'https://www.tiktok.com/@'
    },
    [SocialMediaType.YOUTUBE]: {
        icon: 'bi-youtube',
        baseUrl: 'https://www.youtube.com/'
    },
    [SocialMediaType.TWITTER]: {
        icon: 'bi-twitter-x',
        baseUrl: 'https://twitter.com/'
    }
};
