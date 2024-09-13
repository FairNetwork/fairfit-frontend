export interface ISocialMedia {
    id: string;
    type: SocialMediaType;
    userName: string;
}

export enum SocialMediaType {
    INSTAGRAM,
    FACEBOOK,
    YOUTUBE,
    TIKTOK,
    TWITTER
}
