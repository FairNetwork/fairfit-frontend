import './gymContent.scss';
import Offers from './offers/Offers';
import Benefits from './benefits/Benefits';

const GymContent = () => {
    // ToDo add new gym info
    return (
        <div className="gym-content">
            <Offers />
            <Benefits />
        </div>
    );
};

GymContent.displayName = 'GymContent';

export default GymContent;
