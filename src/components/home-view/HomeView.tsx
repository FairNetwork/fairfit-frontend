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
import { FooterItem } from '../../types/footer';
import WaitCursor from '../shared/wait-cursor/WaitCursor';
import ErrorMessage from '../shared/error-message/ErrorMessage';

const FOOTER_ITEMS: FooterItem[] = [
    { id: '1', name: 'Impressum', path: 'impressum' },
    { id: '2', name: 'Datenschutz', path: 'data_protection' },
    { id: '3', name: 'Allgemein', path: 'general' },
    { id: '4', name: 'Studio anmelden', path: 'register_studio' },
    { id: '5', name: 'Q&A', path: 'q_&_a' }
];

const HomeView = () => {
    const dispatch = useAppDispatch();

    const [headerHeight, setHeaderHeight] = useState(0);

    const gyms = useAppSelector(selectGyms);
    const gymsLoadingState = useAppSelector(selectAllGymsLoadingState);

    useEffect(() => {
        void dispatch(loadAllGyms());
    }, [dispatch]);

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
            <Footer items={FOOTER_ITEMS} />
        </div>
    );
};

HomeView.displayName = 'HomeView';

export default HomeView;
