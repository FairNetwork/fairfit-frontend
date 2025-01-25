import './socialMediaSettings.scss';
import { useMemo } from 'react';
import { SocialMediaType } from '../../../../types/socialMedia';
import SocialMediaInput from './social-media-input/SocialMediaInput';

const SocialMediaSettings = () => {
    const content = useMemo(() => {
        return Object.keys(SocialMediaType)
            .filter((key) => !isNaN(Number(key)))
            .map((socialMediaType) => {
                return <SocialMediaInput type={Number(socialMediaType)} />;
            });
    }, []);

    return (
        <div className="social-media-settings">
            <div className="social-media-settings__headline">Social Media Konten</div>
            <div className="social-media-settings__wrapper">{content}</div>
        </div>
    );
};

SocialMediaSettings.displayName = 'SocialMediaSettings';

export default SocialMediaSettings;
