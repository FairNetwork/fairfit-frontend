import React, { useCallback, useContext } from 'react';
import ImageCarousel from '../../../shared/image-carousel/ImageCarousel';
import { selectBenefitsById } from '../../../../redux/gym/selectors';
import { RootState } from '../../../../redux/store';
import { useAppSelector } from '../../../../hooks/redux';
import { GymContext } from '../../../App';

const Benefits = () => {
    const { gymInternalId } = useContext(GymContext);

    const gymSelector = useCallback(
        (state: RootState) => selectBenefitsById(state, gymInternalId),
        [gymInternalId]
    );

    const benefits = useAppSelector(gymSelector);

    return (
        <div className="benefits">
            {benefits && (
                <div>
                    <h2>Unsere Leistungen</h2>
                    <div className="benefits__content">
                        <ImageCarousel images={benefits} />
                    </div>
                </div>
            )}
        </div>
    );
};

Benefits.displayName = 'Benefits';

export default Benefits;
