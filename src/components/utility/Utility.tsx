import './utility.scss';
import Header from '../shared/header/Header';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { selectGymLoadingState } from '../../redux/gym/selectors';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useMemo } from 'react';
import { updateCurrentGymId } from '../../redux/gym/slice';
import { getGymFromRoute } from '../../utils/routes';
import { loadGym } from '../../redux/gym/actions';
import { GYM_FOOTER_ITEMS, HOME_FOOTER_ITEMS } from '../../constants/footer';
import Footer from '../shared/footer/Footer';

const Utility = () => {
    const dispatch = useAppDispatch();

    const loadingState = useAppSelector(selectGymLoadingState);

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        dispatch(updateCurrentGymId(getGymFromRoute(location.pathname)));

        void dispatch(loadGym());
    }, [dispatch, location.pathname]);

    useEffect(() => {
        if (loadingState === 'rejected') {
            navigate('/no_content');
        }
    }, [loadingState, navigate]);

    const isGymPage = useMemo(() => {
        return getGymFromRoute(location.pathname) !== 'fairfit';
    }, [location.pathname]);

    return (
        <div className="utility">
            <Header></Header>
            <Footer items={isGymPage ? GYM_FOOTER_ITEMS : HOME_FOOTER_ITEMS} />
        </div>
    );
};

Utility.displayName = 'Utility';

export default Utility;
