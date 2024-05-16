import { ReactElement, useEffect, useMemo, useState } from 'react';
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
import useWindowDimensions from '../../hooks/windowDimensions';
import headImage from '../../assets/fairfit-head-image.jpg';

const HomeView = () => {
    const dispatch = useAppDispatch();

    const { height } = useWindowDimensions();

    const gyms = useAppSelector(selectGyms);
    const gymsLoadingState = useAppSelector(selectAllGymsLoadingState);

    useEffect(() => {
        void dispatch(loadAllGyms());
    }, [dispatch]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
            <div className="home-view__head" style={{ height }}>
                <img src={headImage} alt="head image" />
                <div className="home-view__head__content">
                    <h1 className="home-view__head__content__title">FairFit</h1>
                    <h1 className="home-view__head__content__slogan">
                        the fair way to fitness, compare and achieve
                    </h1>
                    <h2 className="home-view__head__content__headline">
                        Finde das perfekte Studio in deine Nähe!
                    </h2>
                    <Search />
                </div>
            </div>
            <div className="home-view__content">
                <h4 className="home-view__content__headline">Deine Ergebnisse</h4>
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
