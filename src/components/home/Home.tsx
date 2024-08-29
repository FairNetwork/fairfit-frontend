import './home.scss';
import { useContext, useEffect } from 'react';
import { GymContext } from '../App';
import Footer from '../shared/footer/Footer';
import { HOME_FOOTER_ITEMS } from '../../constants/footer';
import ContentWrapper from '../shared/content-wrapper/ContentWrapper';
import HomeContent from './home-content/HomeContent';
import HomeHeader from './home-header/HomeHeader';

const Home = () => {
    const { updateGymInternalId } = useContext(GymContext);

    useEffect(() => {
        if (typeof updateGymInternalId === 'function') {
            updateGymInternalId(undefined);
        }
    }, [updateGymInternalId]);

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
