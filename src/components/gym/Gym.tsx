import './gym.scss';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { updateCurrentGymId } from '../../redux/gym/slice';
import { useLocation, useNavigate } from 'react-router-dom';
import { selectGymLoadingState } from '../../redux/gym/selectors';
import { getGymFromRoute } from '../../utils/routes';
import GymHeader from './gym-header/GymHeader';
import ContentWrapper from '../shared/content-wrapper/ContentWrapper';
import Footer from '../shared/footer/Footer';
import { GYM_FOOTER_ITEMS } from '../../constants/footer';
import GymContent from './gym-content/GymContent';

const Gym = () => {
    const dispatch = useAppDispatch();

    const loadingState = useAppSelector(selectGymLoadingState);

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        dispatch(updateCurrentGymId(getGymFromRoute(location.pathname)));
    }, [dispatch, location.pathname]);

    useEffect(() => {
        if (loadingState === 'rejected') {
            navigate('/no_content');
        }
    }, [loadingState, navigate]);

    return (
        <div className="gym">
            <GymHeader />
            <ContentWrapper>
                <GymContent />
            </ContentWrapper>
            <Footer items={GYM_FOOTER_ITEMS} />
        </div>
    );
};

Gym.displayName = 'Gym';

export default Gym;
