import { Skeleton } from '@mui/material';
import './loadingOrderView.scss';

const LoadingOrderView = () => {
    return (
        <div className="loading-order-view">
            <div className="loading-order-view__intro">
                <Skeleton variant="rounded" animation="wave" width={200} height={53} />
            </div>
            <div className="loading-order-view__setup-wizard">
                <div className="loading-order-view__setup-wizard__steps">
                    <Skeleton variant="rounded" animation="wave" width="100%" height={25} />
                </div>
                <div className="loading-order-view__setup-wizard__step-info">
                    <Skeleton variant="rounded" animation="wave" width={300} height={32} />
                </div>
            </div>
            <div className="loading-order-view__offers">
                <div className="loading-order-view__offers__offer">
                    <Skeleton variant="rounded" animation="wave" width="100%" height={32} />
                    <div className="loading-order-view__offers__offer__content">
                        <Skeleton variant="rounded" animation="wave" width="100%" height={150} />
                        <Skeleton variant="rounded" animation="wave" width="100%" height={150} />
                    </div>
                </div>
                <Skeleton variant="rounded" animation="wave" width="100%" height={32} />
            </div>
            <div className="loading-order-view__button">
                <Skeleton variant="rounded" animation="wave" width={100} height={36} />
            </div>
        </div>
    );
};

LoadingOrderView.displayName = 'LoadingOrderView';

export default LoadingOrderView;
