import './home.scss';
import React, { useEffect } from 'react';
import HomeContent from './home-content/HomeContent';
import { useAppDispatch } from '../../hooks/redux';
import { loadAllGyms, loadTags } from '../../redux/gym/actions';
import { updateCurrentGymId } from '../../redux/gym/slice';
import HomeHeader from './home-header/HomeHeader';
import { motion } from 'framer-motion';

const Home = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        void dispatch(loadAllGyms());
        void dispatch(loadTags());
    }, [dispatch]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        dispatch(updateCurrentGymId(undefined));
    }, [dispatch]);

    return (
        <motion.div
            className="home"
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}>
            <HomeHeader />
            <HomeContent />
        </motion.div>
    );
};

Home.displayName = 'Home';

export default Home;
