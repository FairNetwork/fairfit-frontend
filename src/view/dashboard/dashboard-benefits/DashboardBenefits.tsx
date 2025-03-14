import { Box } from '@mui/material';
import { Masonry } from '@mui/lab';
import { useMemo } from 'react';
import Icon from '../../../components/shared/icon/Icon';
import FileInput from '../../../components/shared/file-input/FileInput';
import './dashboardBenefits.scss';
import { useAppSelector } from '../../../hooks/redux';
import { selectBenefits, selectSubscriptionType } from '../../../redux/gym/selectors';
import { PricingType } from '../../../types/pricing';
import SubscriptionDialog from '../../../components/shared/dialog/subscription-dialog/SubscriptionDialog';

const DashboardBenefits = () => {
    const benefits = useAppSelector(selectBenefits);
    const isDefaultPlan = useAppSelector(selectSubscriptionType) === PricingType.ATHLETE;

    const content = useMemo(() => {
        return benefits?.map(({ id, imageUrl }) => {
            return (
                <div className="dashboard-benefits__image" key={`benefit--${id}`}>
                    <img src={imageUrl} alt="benefit" />
                    <div className="dashboard-benefits__image__icon">
                        <Icon icon="fas fa-trash" onClick={() => {}} />
                    </div>
                </div>
            );
        });
    }, [benefits]);

    const handleShowDialog = () => {
        window.openDialog(<SubscriptionDialog />);
    };

    return (
        <div className="dashboard-benefits">
            <FileInput
                onSelect={() => {}}
                disabledAction={
                    isDefaultPlan && (benefits?.length ?? 0) >= 3 ? handleShowDialog : undefined
                }
            />
            {content && (
                <Box sx={{ width: '100%', minHeight: 400 }}>
                    <Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 3 }} spacing={2}>
                        {content}
                    </Masonry>
                </Box>
            )}
        </div>
    );
};

DashboardBenefits.displayName = 'DashboardBenefits';

export default DashboardBenefits;
