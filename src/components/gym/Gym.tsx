import './gym.scss';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { updateCurrentGymId } from '../../redux/gym/slice';
import { useLocation, useNavigate } from 'react-router-dom';
import { selectGymLoadingState, selectHasGymLoaded } from '../../redux/gym/selectors';
import { getGymFromRoute } from '../../utils/routes';
import GymContent from './gym-content/GymContent';
import { loadGym } from '../../redux/gym/actions';
import { motion } from 'framer-motion';
import GymHeader from './gym-header/GymHeader';

const Gym = () => {
    const dispatch = useAppDispatch();

    const loadingState = useAppSelector(selectGymLoadingState);
    const hasGymLoaded = useAppSelector(selectHasGymLoaded);

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        dispatch(updateCurrentGymId(getGymFromRoute(location.pathname)));

        if (!hasGymLoaded) {
            void dispatch(loadGym());
        }
    }, [dispatch, hasGymLoaded, location.pathname]);

    useEffect(() => {
        if (loadingState === 'rejected') {
            navigate('/no_content');
        }
    }, [loadingState, navigate]);

    return (
        <motion.div
            className="gym"
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}>
            <GymHeader />
            <GymContent />
        </motion.div>
    );
};

Gym.displayName = 'Gym';

export default Gym;
