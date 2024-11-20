import './homeContent.scss';
import React, { ReactElement, useMemo } from 'react';
import GymCard from './gym-card/GymCard';
import { useAppSelector } from '../../../hooks/redux';
import { selectAllGymsLoadingState, selectFilteredGyms } from '../../../redux/gym/selectors';
import WaitCursor from '../../shared/wait-cursor/WaitCursor';
import { Masonry } from '@mui/lab';
import { Box } from '@mui/material';

const HomeContent = () => {
    const gyms = useAppSelector(selectFilteredGyms);
    const loadingState = useAppSelector(selectAllGymsLoadingState);

    const content = useMemo(() => {
        const items: ReactElement[] = [];

        gyms?.forEach(({ name, internalId, address, gymImage, tags }) => {
            items.push(
                <GymCard
                    key={`gym-card__${internalId}`}
                    internalId={internalId}
                    name={name}
                    address={address}
                    gymImage={gymImage}
                    tags={tags}
                />
            );
        });

        return items;
    }, [gyms]);

    return (
        <div className="home-content">
            <h3>Deine Ergebnisse</h3>
            <Box sx={{ width: '100%', minHeight: 400 }}>
                <Masonry columns={{ xs: 1, sm: 2, md: 2, lg: 3 }} spacing={2}>
                    {content}
                </Masonry>
            </Box>
            {!gyms && (
                <div className="home-content__error-message">
                    Es konnten keine Ergebnisse geladen werden.
                </div>
            )}
            {loadingState === 'pending' && <WaitCursor />}
        </div>
    );
};

HomeContent.displayName = 'HomeContent';

export default HomeContent;
