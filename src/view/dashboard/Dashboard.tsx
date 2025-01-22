import './dashboard.scss';
import { useDashboardContent } from '../../hooks/dashboard';

const Dashboard = () => {
    const content = useDashboardContent();

    return <div className="dashboard">{content}</div>;
};

Dashboard.displayName = 'Dashboard';

export default Dashboard;
