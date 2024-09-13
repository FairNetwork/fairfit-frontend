import SocialMediaWrapper from '../../../shared/social-media-wrapper/SocialMediaWrapper';
import './gymInfo.scss';

const GymInfo = () => {
    return (
        <div className="gym-info">
            <h2>Kontakt</h2>
            <div className="gym-info__content">
                <SocialMediaWrapper />
            </div>
        </div>
    );
};

GymInfo.displayName = 'GymInfo';

export default GymInfo;
