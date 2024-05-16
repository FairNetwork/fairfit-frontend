import { Link, useNavigate } from 'react-router-dom';
import InfiniteLooper from '../../shared/infinite-looper/InfiniteLooper';
import OfferSlider from './offer-slider/OfferSlider';
import GymInfo from './gym-info/GymInfo';
import './gymHomeView.scss';
import { useCallback, useContext, useEffect, useState } from 'react';
import Offers from './offers/Offers';
import { GymContext } from '../../App';
import { RootState } from '../../../redux/store';
import { selectGymNameById, selectHasOffers, selectImageById } from '../../../redux/gym/selectors';
import { useAppSelector } from '../../../hooks/redux';
import Benefits from './benefits/Benefits';
import Footer from '../../shared/footer/Footer';
import { GYM_FOOTER_ITEMS } from '../../../constants/footer';
import { Menu, MenuItem, Sidebar, SubMenu } from 'react-pro-sidebar';
import Icon from '../../shared/icon/Icon';
import { Dialog, DialogContent } from '@mui/material';
import DialogTransition from '../../shared/dialog-transition/DialogTransition';
import CreateAdDialog from '../../shared/create-ad-dialog/CreateAdDialog';
import useWindowDimensions from '../../../hooks/windowDimensions';
import GymMenu from './menu/Menu';

const GymHomeView = () => {
    const { gymInternalId } = useContext(GymContext);

    const { height } = useWindowDimensions();

    const [toggled, setToggled] = useState(false);
    const [isLoginDialogOpen, setIsLoginDialogOpen] = useState(false);

    const gymSelector = useCallback(
        (state: RootState) => selectHasOffers(state, gymInternalId),
        [gymInternalId]
    );

    const gymNameSelector = useCallback(
        (state: RootState) => selectGymNameById(state, gymInternalId),
        [gymInternalId]
    );

    const gymImageSelector = useCallback(
        (state: RootState) => selectImageById(state, gymInternalId),
        [gymInternalId]
    );

    const hasOffers = useAppSelector(gymSelector);
    const gymName = useAppSelector(gymNameSelector);
    const gymImage = useAppSelector(gymImageSelector);

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
            <div className="gym-home-view__head" style={{ height }}>
                <img src={gymImage} alt="head image" />
                <div className="gym-home-view__head__offer-slider">
                    <InfiniteLooper
                        direction="left"
                        speed={1}
                        onClick={() => navigate(`/${gymInternalId}/offers`)}>
                        <OfferSlider />
                    </InfiniteLooper>
                </div>
                <div className="gym-home-view__head__content">
                    <h1 className="gym-home-view__head__content__title">{gymName}</h1>
                    <GymMenu />
                </div>
            </div>
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
