import { SocialMediaType } from '../types/socialMedia';

export const getIcon = (type: SocialMediaType) => {
    switch (type) {
        case SocialMediaType.INSTAGRAM:
            return 'bi-instagram';
        case SocialMediaType.FACEBOOK:
            return 'bi-facebook';
        case SocialMediaType.TIKTOK:
            return 'bi-tiktok';
        case SocialMediaType.YOUTUBE:
            return 'bi-youtube';
        case SocialMediaType.TWITTER:
            return 'bi-twitter-x';
        default:
            return undefined;
    }
};

export const getProfileUrl = (type: SocialMediaType, userName: string) => {
    switch (type) {
        case SocialMediaType.INSTAGRAM:
            return `https://www.instagram.com/${userName}`;
        case SocialMediaType.FACEBOOK:
            return `https://www.facebook.com/${userName}`;
        case SocialMediaType.TIKTOK:
            return `https://www.tiktok.com/@${userName}`;
        case SocialMediaType.YOUTUBE:
            return `https://www.youtube.com/${userName}`;
        case SocialMediaType.TWITTER:
            return `https://twitter.com/${userName}`;
        default:
            return undefined;
    }
};
