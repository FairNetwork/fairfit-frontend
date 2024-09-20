import { confirmRegistration } from '../../redux/login/actions';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { updateCurrentGymId } from '../../redux/gym/slice';
import { useLocation, useNavigate } from 'react-router-dom';
import { selectGymLoadingState, selectHasGymLoaded } from '../../redux/gym/selectors';
import { extractAccessToken, getGymFromRoute } from '../../utils/routes';
import { loadGym } from '../../redux/gym/actions';

const DashBoard = () => {
    const dispatch = useAppDispatch();

    const loadingState = useAppSelector(selectGymLoadingState);
    const hasGymLoaded = useAppSelector(selectHasGymLoaded);

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        dispatch(updateCurrentGymId(getGymFromRoute(location.pathname)));

        if (extractAccessToken()) {
            void dispatch(confirmRegistration());
        } else if (!hasGymLoaded) {
            void dispatch(loadGym());
        }
    }, [dispatch, hasGymLoaded, location.pathname]);

    useEffect(() => {
        if (loadingState === 'rejected') {
            navigate('/no_content');
        }
    }, [loadingState, navigate]);

    return (
        <div className="gym">
            Dashboard
            {/*<DashBoardHeader />*/}
            {/*<ContentWrapper>*/}
            {/*    <DashBoardContent />*/}
            {/*</ContentWrapper>*/}
            {/*<Footer items={GYM_FOOTER_ITEMS} />*/}
        </div>
    );
};

DashBoard.displayName = 'DashBoard';

export default DashBoard;
