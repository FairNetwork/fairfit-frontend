import {
    faLinkedin,
    faSquareFacebook,
    faSquareInstagram,
    faSquareThreads,
    faSquareXTwitter,
    faSquareYoutube,
    faTelegram,
    faTiktok
} from '@fortawesome/free-brands-svg-icons';

export const getIcon = (brand: string) => {
    switch (brand) {
        case 'instagram':
            return 'bi-instagram';
        case 'facebook':
            return 'bi-facebook';
        case 'tiktok':
            return 'bi-tiktok';
        case 'youtube':
            return 'bi-youtube';
        case 'twitter':
            return 'bi-twitter-x';
        case 'linkedin':
            return 'bi-linkedin';
        case 'threads':
            return 'bi-threads';
        case 'telegram':
            return 'bi-telegram';
        default:
            return undefined;
    }
};

export const getProfileUrl = (brand: string, name: string) => {
    switch (brand) {
        case 'instagram':
            return `https://www.instagram.com/${name}`;
        case 'facebook':
            return `https://www.facebook.com/${name}`;
        case 'tiktok':
            return `https://www.tiktok.com/@${name}`;
        case 'youtube':
            return `https://www.youtube.com/${name}`;
        case 'twitter':
            return `https://twitter.com/${name}`;
        case 'linkedin':
            return `https://linkedin.com/${name}`;
        case 'threads':
            return `https://www.threads.net/@${name}`;
        case 'telegram':
            return `${name}`;
        default:
            return undefined;
    }
};

export const getTitle = (brand: string) => {
    switch (brand) {
        case 'instagram':
            return `Instagram`;
        case 'facebook':
            return `Facebook`;
        case 'tiktok':
            return `TikTok`;
        case 'youtube':
            return `Youtube`;
        case 'twitter':
            return `X`;
        case 'linkedin':
            return `LinkedIn`;
        case 'threads':
            return `Threads`;
        case 'telegram':
            return `Telegram`;
        default:
            return undefined;
    }
};

export const getColor = (brand: string) => {
    switch (brand) {
        case 'instagram':
            return `#E4405F`;
        case 'facebook':
            return `#1877F2`;
        case 'tiktok':
            return `#69C9D0`;
        case 'youtube':
            return `#FF0000`;
        case 'twitter':
            return `#1DA1F2`;
        case 'linkedin':
            return `#0077B5`;
        case 'threads':
            return `#E4405F`;
        case 'telegram':
            return `#0088CC`;
        default:
            return undefined;
    }
};
