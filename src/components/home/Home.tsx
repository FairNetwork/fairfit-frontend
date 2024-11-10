import './home.scss';
import React, { useEffect } from 'react';
import HomeContent from './home-content/HomeContent';
import { useAppDispatch } from '../../hooks/redux';
import { loadAllGyms, loadTags } from '../../redux/gym/actions';
import { updateCurrentGymId } from '../../redux/gym/slice';
import HomeHeader from './home-header/HomeHeader';

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
        <div className="home">
            <HomeHeader />
            <HomeContent />
        </div>
    );
};

Home.displayName = 'Home';

export default Home;
