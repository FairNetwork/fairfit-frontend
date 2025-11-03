import './home.scss';
import HomeCards from './home-cards/HomeCards';
import { useEffect } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { loadGyms } from '../../redux/gym/actions';

const Home = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        void dispatch(loadGyms());
    }, [dispatch]);

    return (
        <div className="home" id="home">
            <div className="home__headline">
                Entdecke eine vielfältige Auswahl an Fitnessangeboten ganz in deiner Nähe!
            </div>
            <HomeCards />
        </div>
    );
};

Home.displayName = 'Home';

export default Home;
