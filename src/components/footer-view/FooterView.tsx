import './footerView.scss';
import { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { GymContext } from '../App';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { Gym } from '../../types/gym';
import { RootState } from '../../redux/store';
import {
    selectGymNameById,
    selectHasGymLoadedById,
    selectImageById
} from '../../redux/gym/selectors';
import { useLocation } from 'react-router-dom';
import { getGymFromRoute, getGymId } from '../../utils/routes';
import { loadGym } from '../../redux/gym/actions';
import Footer from '../shared/footer/Footer';
import { GYM_FOOTER_ITEMS, HOME_FOOTER_ITEMS } from '../../constants/footer';
import DataProtection from './data-protection/DataProtection';
import General from './general/General';
import QAndA from './q-&-a/QAndA';
import RegisterStudio from './register-studio/RegisterStudio';
import Revocation from './revocation/Revocation';
import TermsAndConditions from './terms-conditions/TermsAndConditions';
import Impressum from './impressum/Impressum';
import HeadImage from '../shared/head-image/HeadImage';
import headImage from '../../assets/fairfit-head-image.jpg';
import GymMenu from '../shared/menu/Menu';

const HOMEPAGE_MENU_ITEMS = [{ text: 'HomePage', link: '' }];

const GYM_MENU_ITEMS = [
    { text: 'HomePage', link: '' },
    { text: 'Angebote', link: 'offers' },
    { text: 'Geräte', link: 'geräte' },
    { text: 'Kurse', link: 'kurse' },
    { text: 'Sonstige Leistungen', link: 'sonstige_vorteile' }
];

const FooterView = () => {
    const { updateGymInternalId } = useContext(GymContext);

    const dispatch = useAppDispatch();

    const [gymId, setGymId] = useState<Gym['internalId']>();
    const [slogan, setSlogan] = useState('');

    const gymSelector = useCallback(
        (state: RootState) => selectHasGymLoadedById(state, gymId ?? ''),
        [gymId]
    );

    const gymImageSelector = useCallback(
        (state: RootState) => selectImageById(state, gymId ?? ''),
        [gymId]
    );

    const gymNameSelector = useCallback(
        (state: RootState) => selectGymNameById(state, gymId ?? ''),
        [gymId]
    );

    const gymImage = useAppSelector(gymImageSelector);
    const gymName = useAppSelector(gymNameSelector);
    const hasGymLoaded = useAppSelector(gymSelector);

    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    useEffect(() => {
        if (location.search) {
            const newGymId = getGymId(location.search);

            setGymId(newGymId);

            if (typeof updateGymInternalId === 'function') {
                updateGymInternalId(newGymId);
            }

            if (!hasGymLoaded) {
                void dispatch(loadGym(newGymId));
            }
        }
    }, [dispatch, hasGymLoaded, location.pathname, location.search, updateGymInternalId]);

    const content = useMemo(() => {
        const { pathname } = location;

        const type = getGymFromRoute(pathname);

        switch (type) {
            case 'data-protection':
                setSlogan('Datenschutz liegt uns am Herzen!');

                return <DataProtection />;
            case 'general':
                setSlogan('');

                return <General />;
            case 'q-and-a':
                setSlogan('');

                return <QAndA />;
            case 'register-studio':
                setSlogan('');

                return <RegisterStudio />;
            case 'revocation':
                setSlogan('');

                return <Revocation />;
            case 'terms-conditions':
                setSlogan('');

                return <TermsAndConditions />;
            case 'impressum':
            default:
                setSlogan('');

                return <Impressum />;
        }
    }, [location]);

    return (
        <div className="footer-view">
            <HeadImage image={gymId ? gymImage : headImage}>
                <div className="footer-view__head">
                    <h1 className="footer-view__head__title">{gymId ? gymName : 'FairFit'}</h1>
                    <h1 className="footer-view__head__slogan">{slogan}</h1>
                    <GymMenu items={gymId ? GYM_MENU_ITEMS : HOMEPAGE_MENU_ITEMS} />
                </div>
            </HeadImage>
            <div className="footer-view__content">{content}</div>
            <Footer items={!gymId ? HOME_FOOTER_ITEMS : GYM_FOOTER_ITEMS} gymId={gymId} />
        </div>
    );
};

FooterView.displayName = 'FooterView';

export default FooterView;
