import './utility.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { selectGymLoadingState, selectHasGymLoaded } from '../../redux/gym/selectors';
import { useNavigate } from 'react-router-dom';
import { useEffect, useMemo } from 'react';
import { updateCurrentGymId } from '../../redux/gym/slice';
import { getGymId } from '../../utils/routes';
import { loadGym } from '../../redux/gym/actions';
import UtilityContent from './utility-content/UtilityContent';

const Utility = () => {
    const dispatch = useAppDispatch();

    const loadingState = useAppSelector(selectGymLoadingState);
    const hasGymLoaded = useAppSelector(selectHasGymLoaded);

    const navigate = useNavigate();

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
            <UtilityContent />
        </div>
    );
};

Utility.displayName = 'Utility';

export default Utility;
