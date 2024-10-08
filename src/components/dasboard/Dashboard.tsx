import { confirmRegistration, getIsUserLoggedIn } from '../../redux/login/actions';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { updateCurrentGymId } from '../../redux/gym/slice';
import { useLocation, useNavigate } from 'react-router-dom';
import { selectGymLoadingState, selectHasGymLoaded } from '../../redux/gym/selectors';
import { extractAccessToken, getGymFromRoute } from '../../utils/routes';
import { loadGym } from '../../redux/gym/actions';
import { selectIsLoggedIn } from '../../redux/login/selectors';

const DashBoard = () => {
    const dispatch = useAppDispatch();

    const loadingState = useAppSelector(selectGymLoadingState);
    const hasGymLoaded = useAppSelector(selectHasGymLoaded);
    const isLoggedIn = useAppSelector(selectIsLoggedIn);

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const currentGymId = getGymFromRoute(location.pathname);
        dispatch(updateCurrentGymId(currentGymId));

        if (typeof isLoggedIn !== 'boolean') {
            void dispatch(getIsUserLoggedIn());
        }

        const accessToken = extractAccessToken();

        if (accessToken) {
            void dispatch(confirmRegistration());
        } else if (typeof isLoggedIn === 'boolean' && !isLoggedIn) {
            navigate('/log-in');
        } else if (!hasGymLoaded) {
            void dispatch(loadGym(true));
        }
    }, [dispatch, hasGymLoaded, isLoggedIn, location.pathname, navigate]);

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
