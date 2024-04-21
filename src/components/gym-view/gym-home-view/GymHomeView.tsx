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
import { Menu, MenuItem, Sidebar, SubMenu } from 'react-pro-sidebar';

const GymHomeView = () => {
    const { gymInternalId } = useContext(GymContext);

    const [toggled, setToggled] = useState(false);

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
            <Sidebar
                rootStyles={{ backgroundColor: '#F0F0F0' }}
                onBackdropClick={() => setToggled(false)}
                toggled={toggled}
                breakPoint="always">
                <Menu>
                    <MenuItem>Studio Login</MenuItem>
                    <MenuItem>Dashboard</MenuItem>
                    <MenuItem>Angebote</MenuItem>
                    <SubMenu label="Benefits">
                        <MenuItem> Dark</MenuItem>
                        <MenuItem> Light</MenuItem>
                    </SubMenu>
                </Menu>
            </Sidebar>
            <Header onHeightChange={handleHeaderHeightChange} onMenuOpen={() => setToggled(true)}>
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
