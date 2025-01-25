import { ISocialMedia, SocialMediaType } from '../types/socialMedia';
import { useMemo, useState } from 'react';
import { SOCIAL_MEDIA_DATA } from '../constants/socialMedia';

export const useSocialMedia = (type: SocialMediaType, userName?: string) => {
    const { icon, baseUrl, name } = useMemo(() => {
        return SOCIAL_MEDIA_DATA[type] || {};
    }, [type]);

    const url = useMemo(() => (baseUrl ? `${baseUrl}${userName}` : undefined), [baseUrl, userName]);

    return { icon, url, name };
};

export const useSocialMediaInput = (type: SocialMediaType) => {
    const [socialMedia, setSocialMedia] = useState<ISocialMedia>({ id: 'tmp', userName: '', type });

    const { icon, name } = useSocialMedia(type);

    // ToDo get data from state and update state

    const updateSocialMedia = (newUsername: string) => {
        // ToDo dispatch new userName
        setSocialMedia((prev) => ({ ...prev, userName: newUsername }));
    };

    return { socialMedia, updateSocialMedia, icon, name };
};
