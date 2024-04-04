import { ReactElement, useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../shared/header/Header';
import './homeView.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { loadAllGyms } from '../../redux/gym/actions';
import { selectAllGymsLoadingState, selectGyms } from '../../redux/gym/selectors';
import Search from './search/Search';
import GymCard from './gym-card/GymCard';
import Footer from '../shared/footer/Footer';
import WaitCursor from '../shared/wait-cursor/WaitCursor';
import ErrorMessage from '../shared/error-message/ErrorMessage';
import { HOME_FOOTER_ITEMS } from '../../constants/footer';

const HomeView = () => {
    const dispatch = useAppDispatch();

    const [headerHeight, setHeaderHeight] = useState(0);

    const gyms = useAppSelector(selectGyms);
    const gymsLoadingState = useAppSelector(selectAllGymsLoadingState);

    useEffect(() => {
        void dispatch(loadAllGyms());
    }, [dispatch]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleHeaderHeightChange = (height: number) => {
        setHeaderHeight(height);
    };

    const content = useMemo(() => {
        const items: ReactElement[] = [];

        gyms.forEach(({ name, internalId, location }) => {
            items.push(
                <GymCard
                    key={`gym-card__${internalId}`}
                    internalId={internalId}
                    name={name}
                    location={location}
                    picture="https://www.hussle.com/blog/wp-content/uploads/2020/12/Gym-structure-1080x675.png"
                />
            );
        });

        return items;
    }, [gyms]);

    return (
        <div className="home-view">
            <Header isHomePage onHeightChange={handleHeaderHeightChange} />
            <motion.div animate={{ height: headerHeight }} />
            <div className="home-view__content">
                <h3 className="home-view__content__headline">
                    Finde das perfekte Studio in deine Nähe!
                </h3>
                <Search />
                <h5 className="home-view__content__headline">Deine Ergebnisse</h5>
                {content}
                <WaitCursor shouldShowWaitCursor={gymsLoadingState === 'pending'} />
                {gymsLoadingState === 'rejected' && (
                    <ErrorMessage message="Beim Laden der Studios ist ein Fehler unterlaufen." />
                )}
            </div>
            <Footer items={HOME_FOOTER_ITEMS} />
        </div>
    );
};

HomeView.displayName = 'HomeView';

export default HomeView;
