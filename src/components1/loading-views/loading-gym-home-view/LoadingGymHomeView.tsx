import { Skeleton } from '@mui/material';
import './loadingGymHomeView.scss';

const LoadingGymHomeView = () => {
    return (
        <div className="loading-gym-home-view">
            <div className="loading-gym-home-view__header">
                <Skeleton variant="rounded" animation="wave" width={300} height={90} />
            </div>
            <div className="loading-gym-home-view__offers">
                <div className="loading-gym-home-view__offers__text">
                    <Skeleton variant="rounded" animation="wave" width={300} height={30} />
                </div>
                <div className="loading-gym-home-view__offers__offers">
                    <Skeleton variant="rounded" animation="wave" width={324} height={450} />
                    <Skeleton variant="rounded" animation="wave" width={324} height={450} />
                </div>
            </div>
            <div className="loading-gym-home-view__map">
                <div className="loading-gym-home-view__map__text">
                    <Skeleton variant="rounded" animation="wave" width={220} height={30} />
                </div>
                <div className="loading-gym-home-view__map__map">
                    <Skeleton variant="rounded" animation="wave" width="100%" height={200} />
                </div>
            </div>
            <div className="loading-gym-home-view"></div>
        </div>
    );
};

LoadingGymHomeView.displayName = 'LoadingGymHomeView';

export default LoadingGymHomeView;
