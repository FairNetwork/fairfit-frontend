import './footerView.scss';
import { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { GymContext } from '../App';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { Gym } from '../../types/gym';
import { RootState } from '../../redux/store';
import { selectHasGymLoadedById } from '../../redux/gym/selectors';
import { useLocation } from 'react-router-dom';
import { getGymFromRoute, getGymId } from '../../utils/routes';
import { loadGym } from '../../redux/gym/actions';
import Header from '../shared/header/Header';
import Footer from '../shared/footer/Footer';
import { GYM_FOOTER_ITEMS, HOME_FOOTER_ITEMS } from '../../constants/footer';
import { motion } from 'framer-motion';
import DataProtection from './data-protection/DataProtection';
import General from './general/General';
import QAndA from './q-&-a/QAndA';
import RegisterStudio from './register-studio/RegisterStudio';
import Revocation from './revocation/Revocation';
import TermsAndConditions from './terms-conditions/TermsAndConditions';
import Impressum from './impressum/Impressum';

const FooterView = () => {
    const { updateGymInternalId } = useContext(GymContext);

    const dispatch = useAppDispatch();

    const [headerHeight, setHeaderHeight] = useState(100);
    const [gymId, setGymId] = useState<Gym['internalId']>();

    const gymSelector = useCallback(
        (state: RootState) => selectHasGymLoadedById(state, gymId ?? ''),
        [gymId]
    );

    const hasGymLoaded = useAppSelector(gymSelector);

    const location = useLocation();

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

    const handleHeaderHeightChange = (height: number) => {
        setHeaderHeight(height);
    };

    const content = useMemo(() => {
        const { pathname } = location;

        const type = getGymFromRoute(pathname);

        switch (type) {
            case 'data-protection':
                return <DataProtection />;
            case 'general':
                return <General />;
            case 'q-and-a':
                return <QAndA />;
            case 'register-studio':
                return <RegisterStudio />;
            case 'revocation':
                return <Revocation />;
            case 'terms-conditions':
                return <TermsAndConditions />;
            case 'impressum':
            default:
                return <Impressum />;
        }
    }, [location]);

    return (
        <div className="footer-view">
            <Header isHomePage={!gymId} onHeightChange={handleHeaderHeightChange} />
            <motion.div animate={{ height: headerHeight }} />
            <div className="footer-view__content">{content}</div>
            <Footer items={!gymId ? HOME_FOOTER_ITEMS : GYM_FOOTER_ITEMS} />
        </div>
    );
};

FooterView.displayName = 'FooterView';

export default FooterView;
