import './socialMedia.scss';
import Icon from '../../icon/Icon';
import { getIcon, getProfileUrl } from '../../../../utils/socialMedia';
import { ISocialMedia } from '../../../../types/socialMedia';

interface SocialMediaProps {
    userName: ISocialMedia['userName'];
    type: ISocialMedia['type'];
}

const SocialMedia = ({ userName, type }: SocialMediaProps) => {
    const handleClick = () => {
        window.open(getProfileUrl(type, userName), '_blank');
    };

    return (
        <div className="social_media">
            <Icon icon={getIcon(type) ?? ''} size={40} onClick={handleClick} />
        </div>
    );
};

SocialMedia.displayName = 'SocialMedia';

export default SocialMedia;
