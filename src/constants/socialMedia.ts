import { SocialMediaType } from '../types/socialMedia';

export const SOCIAL_MEDIA_DATA = {
    [SocialMediaType.INSTAGRAM]: {
        icon: 'fab fa-instagram',
        baseUrl: 'https://www.instagram.com/',
        name: 'Instagram'
    },
    [SocialMediaType.FACEBOOK]: {
        icon: 'fab fa-facebook',
        baseUrl: 'https://www.facebook.com/',
        name: 'Facebook'
    },
    [SocialMediaType.TIKTOK]: {
        icon: 'fab fa-tiktok',
        baseUrl: 'https://www.tiktok.com/@',
        name: 'TikTok'
    },
    [SocialMediaType.YOUTUBE]: {
        icon: 'fab fa-youtube',
        baseUrl: 'https://www.youtube.com/',
        name: 'Youtube'
    },
    [SocialMediaType.TWITTER]: {
        icon: 'fab fa-x-twitter',
        baseUrl: 'https://twitter.com/',
        name: 'X'
    }
};
