import { useEffect } from 'react';
import { useAppDispatch } from '../../../hooks/redux';
import { loadStatistics } from '../../../redux/statistics/actions';
import Requests from './requests/Requests';
import './homepageAnalytics.scss';
import Abonnements from './abonnements/Abonnements';
import { Divider } from '@mui/material';

const HomepageAnalytics = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        void dispatch(loadStatistics());
    }, [dispatch]);

    return (
        <div className="homepage-analytics">
            <Requests />
            <Divider variant="middle" />
            <Abonnements />
        </div>
    );
};

HomepageAnalytics.displayName = 'HomepageAnalytics';

export default HomepageAnalytics;
