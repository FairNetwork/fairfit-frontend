import { useNavigate } from 'react-router-dom';
import InfiniteLooper from '../../../components/shared/infinite-looper/InfiniteLooper';
import OfferSlider from '../../../components/gym/gym-header/offer-slider/OfferSlider';
import GymInfo from './gym-info/GymInfo';
import './gymHomeView.scss';
import { useCallback, useContext, useEffect, useState } from 'react';
import Offers from '../../../components/gym/gym-content/offers/Offers';
import { GymContext } from '../../App';
import { RootState } from '../../../redux/store';
import { selectGymNameById, selectHasOffers, selectImageById } from '../../../redux/gym/selectors';
import { useAppSelector } from '../../../hooks/redux';
import Benefits from '../../../components/gym/gym-content/benefits/Benefits';
import Footer from '../../shared/footer/Footer';
import { GYM_FOOTER_ITEMS } from '../../../constants/footer';
import { Dialog, DialogContent } from '@mui/material';
import DialogTransition from '../../shared/dialog-transition/DialogTransition';
import CreateAdDialog from '../../shared/create-ad-dialog/CreateAdDialog';
import GymMenu from '../../shared/menu/Menu';
import HeadImage from '../../shared/head-image/HeadImage';

const MENU_ITEMS = [
    { text: 'Angebote', link: 'offers' },
    { text: 'Geräte', link: 'geräte' },
    { text: 'Kurse', link: 'kurse' },
    { text: 'Sonstige Leistungen', link: 'sonstige_vorteile' }
];

const GymHomeView = () => {
    const { gymInternalId } = useContext(GymContext);

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

    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    /*
    const handleOpenLoginDialog = () => {
        setIsLoginDialogOpen(true);
    };

     */

    return (
        <div className="gym-home-view">
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
            <HeadImage image={gymImage}>
                <div className="gym-home-view__head">
                    {hasOffers && (
                        <div className="gym-home-view__head__offer-slider">
                            <InfiniteLooper
                                direction="left"
                                speed={1}
                                onClick={() => navigate(`/${gymInternalId}/offers`)}>
                                <OfferSlider />
                            </InfiniteLooper>
                        </div>
                    )}
                    <div className="gym-home-view__head__content">
                        <h1 className="gym-home-view__head__content__title">{gymName}</h1>
                        <GymMenu items={MENU_ITEMS} />
                    </div>
                </div>
            </HeadImage>
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
