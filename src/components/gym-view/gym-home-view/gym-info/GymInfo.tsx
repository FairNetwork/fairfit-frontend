import Location from './location/Location';
import OpeningTimes from './opening-times/OpeningTimes';
import Contact from './contact/Contact';
import SocialMedia from './social-media/SocialMedia';
import './gymInfo.scss';

const GymInfo = () => {
    return (
        <div className="gym-info">
            <h2>Das sind wir</h2>
            <div className="gym-info__content">
                <Location />
                <OpeningTimes />
                <Contact />
                <SocialMedia />
            </div>
        </div>
    );
};

GymInfo.displayName = 'GymInfo';

export default GymInfo;
