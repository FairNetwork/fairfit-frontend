import { ReactElement, useContext, useEffect, useMemo } from 'react';
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
import headImage from '../../assets/fairfit-head-image.jpg';
import HeadImage from '../shared/head-image/HeadImage';
import { GymContext } from '../App';

const HomeView = () => {
    const dispatch = useAppDispatch();

    const { updateGymInternalId } = useContext(GymContext);

    const gyms = useAppSelector(selectGyms);
    const gymsLoadingState = useAppSelector(selectAllGymsLoadingState);

    useEffect(() => {
        if (typeof updateGymInternalId === 'function') {
            updateGymInternalId(undefined);
        }
    }, [updateGymInternalId]);

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
            <HeadImage image={headImage}>
                <div className="home-view__head">
                    <h1 className="home-view__head__title">FairFit</h1>
                    <h1 className="home-view__head__slogan">
                        the fair way to fitness, compare and achieve
                    </h1>
                    <h2 className="home-view__head__headline">
                        Finde das perfekte Studio in deiner Nähe!
                    </h2>
                    <Search />
                </div>
            </HeadImage>
            <div className="home-view__content">
                <h3 className="home-view__content__headline">Deine Ergebnisse</h3>
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
