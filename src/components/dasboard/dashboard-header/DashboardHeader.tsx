import './dashboardHeader.scss';
import Header from '../../shared/header/Header';
import { useAppSelector } from '../../../hooks/redux';
import { selectGymName } from '../../../redux/gym/selectors';

const DashboardHeader = () => {
    const gymName = useAppSelector(selectGymName);

    return (
        <div className="dashboard-header">
            <Header>
                <div className="dashboard-header__content">
                    <h1 className="dashboard-header__content__title">{gymName}</h1>
                </div>
            </Header>
        </div>
    );
};

DashboardHeader.displayName = 'DashboardHeader';

export default DashboardHeader;
