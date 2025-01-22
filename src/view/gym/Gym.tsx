import GymAbonnements from './gym-abonnements/GymAbonnements';
import GymContact from './gym-contact/GymContact';
import GymOpeningTimes from './gym-opening-times/GymOpeningTimes';
import GymBenefits from './gym-benefits/GymBenefits';
import './gym.scss';

const Gym = () => {
    return (
        <div className="gym">
            <GymAbonnements />
            <GymContact />
            <GymBenefits />
            <GymOpeningTimes />
        </div>
    );
};

Gym.displayName = 'Gym';

export default Gym;
