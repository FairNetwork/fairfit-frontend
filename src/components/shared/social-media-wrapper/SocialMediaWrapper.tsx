import './socialMediaWrapper.scss';
import { useMemo } from 'react';
import SocialMedia from './social-media/SocialMedia';
import { SocialMediaType } from '../../../types/socialMedia';
import { useAppSelector } from '../../../hooks/redux';
import { selectSocialMedia } from '../../../redux/gym/selectors';

const SocialMediaWrapper = () => {
    const socialMedia = useAppSelector(selectSocialMedia);

    const content = useMemo(() => {
        return socialMedia?.map(({ id, type, userName }) => {
            return <SocialMedia key={`social-media--${id}`} userName={userName} type={type} />;
        });
    }, [socialMedia]);

    return <div className="social-media-wrapper">{content}</div>;
};

SocialMediaWrapper.displayName = 'SocialMediaWrapper';

export default SocialMediaWrapper;
