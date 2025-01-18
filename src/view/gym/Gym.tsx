import GymAbonnements from './gym-abonnements/GymAbonnements';
import GymContact from './gym-contact/GymContact';
import './gym.scss';

const Gym = () => {
    return (
        <div className="gym">
            <GymAbonnements />
            <GymContact />
        </div>
    );
};

Gym.displayName = 'Gym';

export default Gym;
