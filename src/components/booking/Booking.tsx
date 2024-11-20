import './booking.scss';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { useLocation, useNavigate } from 'react-router-dom';
import {
    selectAbonnements,
    selectGymLoadingState,
    selectHasGymLoaded
} from '../../redux/gym/selectors';
import { updateCurrentGymId } from '../../redux/gym/slice';
import { getGymFromRoute, getOfferId } from '../../utils/routes';
import { loadGym } from '../../redux/gym/actions';
import BookingContent from './booking-content/BookingContent';
import { setSelectedOfferName } from '../../redux/user/slice';

const Booking = () => {
    const dispatch = useAppDispatch();

    const loadingState = useAppSelector(selectGymLoadingState);
    const hasBookingLoaded = useAppSelector(selectHasGymLoaded);
    const abonnements = useAppSelector(selectAbonnements);

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        dispatch(updateCurrentGymId(getGymFromRoute(location.pathname)));
        dispatch(
            setSelectedOfferName(
                abonnements?.find(({ id }) => id === getOfferId(location.search))?.title
            )
        );

        if (!hasBookingLoaded) {
            void dispatch(loadGym());
        }
    }, [abonnements, dispatch, hasBookingLoaded, location.pathname, location.search]);

    useEffect(() => {
        if (loadingState === 'rejected') {
            navigate('/no_content');
        }
    }, [loadingState, navigate]);

    return (
        <div className="gym">
            <BookingContent />
        </div>
    );
};

Booking.displayName = 'Booking';

export default Booking;
