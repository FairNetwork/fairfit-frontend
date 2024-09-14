import './gymContent.scss';
import Offers from './offers/Offers';
import Benefits from './benefits/Benefits';
import GymInfo from './gym-info/GymInfo';
import OpeningTimes from './opening-times/OpeningTimes';

const GymContent = () => {
    return (
        <div className="gym-content">
            <Offers />
            <Benefits />
            <OpeningTimes />
            <GymInfo />
        </div>
    );
};

GymContent.displayName = 'GymContent';

export default GymContent;
