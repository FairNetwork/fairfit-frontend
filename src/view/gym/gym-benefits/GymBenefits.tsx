import { useMemo } from 'react';
import { Box } from '@mui/material';
import { Masonry } from '@mui/lab';
import './gymBenefits.scss';
import { useAppSelector } from '../../../hooks/redux';
import { selectBenefits } from '../../../redux/gym/selectors';

const GymBenefits = () => {
    const benefits = useAppSelector(selectBenefits);

    const content = useMemo(() => {
        return benefits?.map(({ id, imageUrl }) => {
            return (
                <div className="gym-benefits__image" key={`benefit--${id}`}>
                    <img src={imageUrl} alt="benefit" />
                </div>
            );
        });
    }, [benefits]);

    if (!benefits) {
        return undefined;
    }

    return (
        <div className="gym-benefits" id="scroll-benefits">
            <div className="gym-benefits__headline">
                Profitiere von zahlreichen Vorteilen und genieße exklusive Extras, die dein Training
                noch effektiver und angenehmer machen!
            </div>
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

GymBenefits.displayName = 'GymBenefits';

export default GymBenefits;
