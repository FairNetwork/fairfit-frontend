import Icon from '../../icon/Icon';
import { ISocialMedia } from '../../../../types/socialMedia';
import { useSocialMedia } from '../../../../hooks/socialMedia';
import './socialMedia.scss';

interface SocialMediaProps {
    userName: ISocialMedia['userName'];
    type: ISocialMedia['type'];
}

const SocialMedia = ({ userName, type }: SocialMediaProps) => {
    const { icon, url } = useSocialMedia(type, userName);

    const handleClick = () => {
        window.open(url, '_blank');
    };

    return (
        <div className="social_media">
            <Icon icon={icon} size={24} onClick={handleClick} />
        </div>
    );
};

SocialMedia.displayName = 'SocialMedia';

export default SocialMedia;
