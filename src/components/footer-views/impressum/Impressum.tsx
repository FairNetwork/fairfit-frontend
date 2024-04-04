import './impressum.scss';
import Header from '../../shared/header/Header';
import { motion } from 'framer-motion';
import Footer from '../../shared/footer/Footer';
import { useCallback, useContext, useEffect, useState } from 'react';
import { GYM_FOOTER_ITEMS, HOME_FOOTER_ITEMS } from '../../../constants/footer';
import { useLocation } from 'react-router-dom';
import { getGymFromRoute, getGymId } from '../../../utils/routes';
import { Gym } from '../../../types/gym';
import { GymContext } from '../../App';
import { RootState } from '../../../redux/store';
import { selectHasGymLoadedById } from '../../../redux/gym/selectors';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { loadGym } from '../../../redux/gym/actions';

const Impressum = () => {
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

    return (
        <div className="impressum">
            <Header isHomePage={!gymId} onHeightChange={handleHeaderHeightChange} />
            <motion.div animate={{ height: headerHeight }} />
            <div className="impressum__content">
                <h3 className="impressum__content__headline">Impressum</h3>
            </div>
            <Footer items={!gymId ? HOME_FOOTER_ITEMS : GYM_FOOTER_ITEMS} />
        </div>
    );
};

Impressum.displayName = 'Impressum';

export default Impressum;
