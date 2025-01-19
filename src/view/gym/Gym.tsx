import GymAbonnements from './gym-abonnements/GymAbonnements';
import GymContact from './gym-contact/GymContact';
import GymOpeningTimes from './gym-opening-times/GymOpeningTimes';
import './gym.scss';

const Gym = () => {
    return (
        <div className="gym">
            <GymAbonnements />
            <GymContact />
            <GymOpeningTimes />
        </div>
    );
};

Gym.displayName = 'Gym';

export default Gym;
