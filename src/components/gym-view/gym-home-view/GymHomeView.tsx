import { useNavigate } from 'react-router-dom';
import InfiniteLooper from '../../shared/infinite-looper/InfiniteLooper';
import OfferSlider from './offer-slider/OfferSlider';
import GymInfo from './gym-info/GymInfo';
import './gymHomeView.scss';
import Header from '../../shared/header/Header';
import { useCallback, useContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Offers from './offers/Offers';
import { GymContext } from '../../App';
import { RootState } from '../../../redux/store';
import { selectHasOffers } from '../../../redux/gym/selectors';
import { useAppSelector } from '../../../hooks/redux';
import Benefits from './benefits/Benefits';
import Footer from '../../shared/footer/Footer';
import { GYM_FOOTER_ITEMS } from '../../../constants/footer';

const GymHomeView = () => {
    const { gymInternalId } = useContext(GymContext);

    const gymSelector = useCallback(
        (state: RootState) => selectHasOffers(state, gymInternalId),
        [gymInternalId]
    );

    const hasOffers = useAppSelector(gymSelector);

    const [headerHeight, setHeaderHeight] = useState(100);

    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleHeaderHeightChange = (height: number) => {
        setHeaderHeight(height);
    };

    return (
        <div className="gym-home-view">
            <Header onHeightChange={handleHeaderHeightChange}>
                {hasOffers && (
                    <InfiniteLooper
                        direction="left"
                        speed={1}
                        onClick={() => navigate(`/${gymInternalId}/offers`)}>
                        <OfferSlider />
                    </InfiniteLooper>
                )}
            </Header>
            <motion.div animate={{ height: headerHeight }} />
            <div className="gym-home-view__content">
                <Offers />
                <Benefits />
                <GymInfo />
            </div>
            <Footer items={GYM_FOOTER_ITEMS} gymId={gymInternalId} />
        </div>
    );
};

GymHomeView.displayName = 'GymHomeView';

export default GymHomeView;
