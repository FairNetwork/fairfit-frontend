import { ISocialMedia, SocialMediaType } from '../types/socialMedia';
import { useEffect, useMemo, useState } from 'react';
import { SOCIAL_MEDIA_DATA } from '../constants/socialMedia';
import { useAppSelector } from './redux';
import { selectSocialMedia } from '../redux/gym/selectors';

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

    const socialMedias = useAppSelector(selectSocialMedia);

    useEffect(() => {
        const media = socialMedias?.find((mediaItem) => mediaItem.type === type);

        if (media) {
            setSocialMedia(media);
        }
    }, [socialMedias]);

    const updateSocialMedia = (newUsername: string) => {
        // ToDo dispatch new userName
        setSocialMedia((prev) => ({ ...prev, userName: newUsername }));
    };

    return { socialMedia, updateSocialMedia, icon, name };
};
