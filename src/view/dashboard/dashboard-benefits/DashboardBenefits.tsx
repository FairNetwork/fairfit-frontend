import { Box } from '@mui/material';
import { Masonry } from '@mui/lab';
import { useMemo } from 'react';
import Icon from '../../../components/shared/icon/Icon';
import FileInput from '../../../components/shared/file-input/FileInput';
import './dashboardBenefits.scss';

const DashboardBenefits = () => {
    const content = useMemo(() => {
        return (
            <>
                <div className="dashboard-benefits__image">
                    <img
                        src="https://cdn.pixabay.com/photo/2016/05/16/21/07/football-1396740_1280.jpg"
                        alt="benefit"
                    />
                    <div className="dashboard-benefits__image__icon">
                        <Icon icon="fas fa-trash" onClick={() => {}} />
                    </div>
                </div>
                <div className="dashboard-benefits__image">
                    <img
                        src="https://cdn3.pixelcut.app/7/20/uncrop_hero_bdf08a8ca6.jpg"
                        alt="benefit"
                    />
                    <div className="dashboard-benefits__image__icon">
                        <Icon icon="fas fa-trash" onClick={() => {}} />
                    </div>
                </div>
                <div className="dashboard-benefits__image">
                    <img
                        src="https://create.microsoft.com/_next/image?url=https%3A%2F%2Fcdn.create.microsoft.com%2Fimages%2Fimage-creator-B03_mapletree.webp&w=1920&q=90"
                        alt="benefit"
                    />
                    <div className="dashboard-benefits__image__icon">
                        <Icon icon="fas fa-trash" onClick={() => {}} />
                    </div>
                </div>
                <div className="dashboard-benefits__image">
                    <img
                        src="https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg"
                        alt="benefit"
                    />
                    <div className="dashboard-benefits__image__icon">
                        <Icon icon="fas fa-trash" onClick={() => {}} />
                    </div>
                </div>
                <div className="dashboard-benefits__image">
                    <img
                        src="https://letsenhance.io/static/03620c83508fc72c6d2b218c7e304ba5/11499/UpscalerAfter.jpg"
                        alt="benefit"
                    />
                    <div className="dashboard-benefits__image__icon">
                        <Icon icon="fas fa-trash" onClick={() => {}} />
                    </div>
                </div>
            </>
        );
    }, []);

    return (
        <div className="dashboard-benefits">
            <FileInput onSelect={() => {}} />
            <Box sx={{ width: '100%', minHeight: 400 }}>
                <Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 3 }} spacing={2}>
                    {content}
                </Masonry>
            </Box>
        </div>
    );
};

DashboardBenefits.displayName = 'DashboardBenefits';

export default DashboardBenefits;
