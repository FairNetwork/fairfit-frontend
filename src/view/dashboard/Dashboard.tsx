import './dashboard.scss';
import { useDashboardContent } from '../../hooks/dashboard';
import { useAppDispatch } from '../../hooks/redux';
import { useGymRoute } from '../../hooks/gym';
import { useEffect } from 'react';
import { setCurrentId } from '../../redux/gym/slice';

const Dashboard = () => {
    const dispatch = useAppDispatch();

    const content = useDashboardContent();
    const gymId = useGymRoute();

    useEffect(() => {
        dispatch(setCurrentId(gymId));
    }, [gymId]);

    return <div className="dashboard">{content}</div>;
};

Dashboard.displayName = 'Dashboard';

export default Dashboard;
