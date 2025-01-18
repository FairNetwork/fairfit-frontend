import { SocialMediaType } from '../types/socialMedia';
import { useMemo } from 'react';
import { SOCIAL_MEDIA_DATA } from '../constants/socialMedia';

export const useSocialMedia = (type: SocialMediaType, userName: string) => {
    const { icon, baseUrl } = useMemo(() => {
        return SOCIAL_MEDIA_DATA[type] || {};
    }, [type]);

    const url = useMemo(() => (baseUrl ? `${baseUrl}${userName}` : undefined), [baseUrl, userName]);

    return { icon, url };
};
