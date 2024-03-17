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
            return faSquareInstagram;
        case 'facebook':
            return faSquareFacebook;
        case 'tiktok':
            return faTiktok;
        case 'youtube':
            return faSquareYoutube;
        case 'twitter':
            return faSquareXTwitter;
        case 'linkedin':
            return faLinkedin;
        case 'threads':
            return faSquareThreads;
        case 'telegram':
            return faTelegram;
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
