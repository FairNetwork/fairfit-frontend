import './socialMediaWrapper.scss';
import { useMemo } from 'react';
import SocialMedia from './social-media/SocialMedia';
import { SocialMediaType } from '../../../types/socialMedia';

const SocialMediaWrapper = () => {
    const content = useMemo(() => {
        return <SocialMedia userName="mgese" type={SocialMediaType.INSTAGRAM} />;
    }, []);

    return <div className="social-media-wrapper">{content}</div>;
};

SocialMediaWrapper.displayName = 'SocialMediaWrapper';

export default SocialMediaWrapper;
