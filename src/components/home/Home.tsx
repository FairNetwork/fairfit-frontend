import './home.scss';
import { useEffect } from 'react';
import Footer from '../shared/footer/Footer';
import { HOME_FOOTER_ITEMS } from '../../constants/footer';
import ContentWrapper from '../shared/content-wrapper/ContentWrapper';
import HomeContent from './home-content/HomeContent';
import HomeHeader from './home-header/HomeHeader';
import { useAppDispatch } from '../../hooks/redux';
import { loadAllGyms, loadTags } from '../../redux/gym/actions';
import { updateCurrentGymId } from '../../redux/gym/slice';

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
            <ContentWrapper>
                <HomeContent />
            </ContentWrapper>
            <Footer items={HOME_FOOTER_ITEMS} />
        </div>
    );
};

Home.displayName = 'Home';

export default Home;
