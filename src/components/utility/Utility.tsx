import './utility.scss';
import Header from '../shared/header/Header';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { selectGymLoadingState, selectHasGymLoaded } from '../../redux/gym/selectors';
import { useNavigate } from 'react-router-dom';
import { useEffect, useMemo } from 'react';
import { updateCurrentGymId } from '../../redux/gym/slice';
import { getGymId } from '../../utils/routes';
import { loadGym } from '../../redux/gym/actions';
import { GYM_FOOTER_ITEMS, HOME_FOOTER_ITEMS } from '../../constants/footer';
import Footer from '../shared/footer/Footer';
import UtilityHeader from './utility-header/UtilityHeader';
import ContentWrapper from '../shared/content-wrapper/ContentWrapper';
import UtilityContent from './utility-content/UtilityContent';

const Utility = () => {
    const dispatch = useAppDispatch();

    const loadingState = useAppSelector(selectGymLoadingState);
    const hasGymLoaded = useAppSelector(selectHasGymLoaded);

    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        dispatch(updateCurrentGymId(getGymId()));

        if (!hasGymLoaded) {
            void dispatch(loadGym());
        }
    }, [dispatch, hasGymLoaded]);

    const isGymPage = useMemo(() => {
        return getGymId() !== 'fairfit';
    }, []);

    useEffect(() => {
        if (isGymPage && loadingState === 'rejected') {
            navigate('/no_content');
        }
    }, [isGymPage, loadingState, navigate]);

    return (
        <div className="utility">
            <Header>
                <UtilityHeader />
            </Header>
            <ContentWrapper>
                <UtilityContent />
            </ContentWrapper>
            <Footer items={isGymPage ? GYM_FOOTER_ITEMS : HOME_FOOTER_ITEMS} />
        </div>
    );
};

Utility.displayName = 'Utility';

export default Utility;
