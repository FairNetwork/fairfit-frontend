import { Link, useNavigate } from 'react-router-dom';
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
import Icon from '../../shared/icon/Icon';
import { Dialog, DialogContent } from '@mui/material';
import LoginDialog from '../../shared/login-dialog/LoginDialog';
import DialogTransition from '../../shared/dialog-transition/DialogTransition';
import CreateAdDialog from '../../shared/create-ad-dialog/CreateAdDialog';

const GymHomeView = () => {
    const { gymInternalId } = useContext(GymContext);

    const [toggled, setToggled] = useState(false);
    const [isLoginDialogOpen, setIsLoginDialogOpen] = useState(false);

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

    const handleOpenLoginDialog = () => {
        setToggled(false);
        setIsLoginDialogOpen(true);
    };

    return (
        <div className="gym-home-view">
            <Sidebar
                rootStyles={{ backgroundColor: '#F0F0F0' }}
                onBackdropClick={() => setToggled(false)}
                toggled={toggled}
                breakPoint="all">
                <Menu>
                    <div style={{ margin: 10, cursor: 'pointer' }}>
                        <Icon icon="bi-x-lg" size={25} onClick={() => setToggled(false)} />
                    </div>
                    <MenuItem onClick={handleOpenLoginDialog}>Studio Login</MenuItem>
                    <MenuItem component={<Link to={`/${gymInternalId}/dashboard`} />}>
                        Dashboard
                    </MenuItem>
                    <MenuItem component={<Link to={`/${gymInternalId}/offers`} />}>
                        Angebote
                    </MenuItem>
                    <SubMenu label="Benefits">
                        <MenuItem component={<Link to={`/${gymInternalId}/geräte`} />}>
                            Geräte
                        </MenuItem>
                        <MenuItem component={<Link to={`/${gymInternalId}/kurse`} />}>
                            Kurse
                        </MenuItem>
                        <MenuItem component={<Link to={`/${gymInternalId}/sonstige_vorteile`} />}>
                            Sonstige Leistungen
                        </MenuItem>
                    </SubMenu>
                </Menu>
            </Sidebar>
            <Dialog
                open={isLoginDialogOpen}
                keepMounted
                fullWidth
                TransitionComponent={DialogTransition}
                onClose={() => setIsLoginDialogOpen(false)}
                aria-describedby="alert-dialog-slide-description">
                <DialogContent>
                    <CreateAdDialog onFinish={() => {}} />
                </DialogContent>
            </Dialog>
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
