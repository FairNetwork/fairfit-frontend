import './abonnements.scss';
import { useAppSelector } from '../../../hooks/redux';
import { selectAbonnements } from '../../../redux/gym/selectors';
import { Offer } from '../../../types/offer';
import Card from '../../shared/card-slider/card/Card';
import React, { useEffect, useMemo } from 'react';
import { Masonry } from '@mui/lab';
import { Box } from '@mui/material';

const Abonnements = () => {
    const abonnements = useAppSelector(selectAbonnements);

    // const handleAdd = () => {};

    const handleEdit = (id: Offer['id']) => {};

    useEffect(() => {}, []);

    const content = useMemo(
        () =>
            abonnements?.map(
                ({ id, details, title, price, priceAfterDuration, duration, isOffer }) => {
                    return (
                        <Card
                            onEdit={handleEdit}
                            isSelected={false}
                            key={id}
                            id={id}
                            title={title}
                            details={details}
                            price={price}
                            isOffer={isOffer}
                            priceAfterDuration={priceAfterDuration}
                            duration={duration}
                        />
                    );
                }
            ),
        [abonnements]
    );

    return (
        <div className="abonnements">
            <i>
                Stelle verschiedene Mitgliedschaftsoptionen vor. Füge Beschreibungen und Preise
                hinzu, um deinen Kunden die Wahl zu erleichtern.
            </i>
            {content && (
                <Box sx={{ width: '100%', minHeight: 400 }}>
                    <Masonry columns={{ xs: 2, sm: 3, md: 4, lg: 4 }} spacing={2}>
                        {content}
                    </Masonry>
                </Box>
            )}
        </div>
    );
};

Abonnements.displayName = 'Abonnements';

export default Abonnements;
