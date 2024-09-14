import './gymContent.scss';
import Offers from './offers/Offers';
import Benefits from './benefits/Benefits';
import OpeningTimes from './opening-times/OpeningTimes';
import SocialMediaWrapper from '../../shared/social-media-wrapper/SocialMediaWrapper';

const GymContent = () => {
    return (
        <div className="gym-content">
            <Offers />
            <Benefits />
            <OpeningTimes />
            <SocialMediaWrapper />
        </div>
    );
};

GymContent.displayName = 'GymContent';

export default GymContent;
