import GymAbonnements from './gym-abonnements/GymAbonnements';
import GymContact from './gym-contact/GymContact';
import GymOpeningTimes from './gym-opening-times/GymOpeningTimes';
import GymBenefits from './gym-benefits/GymBenefits';
import './gym.scss';
import { useAppDispatch } from '../../hooks/redux';
import { useEffect } from 'react';
import { setCurrentId } from '../../redux/gym/slice';
import { useGymRoute } from '../../hooks/gym';

const Gym = () => {
    const dispatch = useAppDispatch();

    const gymId = useGymRoute();

    useEffect(() => {
        dispatch(setCurrentId(gymId));
    }, [gymId]);

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
