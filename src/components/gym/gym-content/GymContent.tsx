import './gymContent.scss';
import Offers from './offers/Offers';
import Benefits from './benefits/Benefits';
import GymInfo from './gym-info/GymInfo';

const GymContent = () => {
    return (
        <div className="gym-content">
            <Offers />
            <Benefits />
            <GymInfo />
        </div>
    );
};

GymContent.displayName = 'GymContent';

export default GymContent;
