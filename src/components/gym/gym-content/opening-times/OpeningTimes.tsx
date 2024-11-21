import './openingTimes.scss';
import { useAppSelector } from '../../../../hooks/redux';
import { selectOpeningTimes } from '../../../../redux/gym/selectors';
import React, { useMemo } from 'react';
import OpeningTime from './opening-time/OpeningTime';
import { Masonry } from '@mui/lab';

const OpeningTimes = () => {
    const openingTimes = useAppSelector(selectOpeningTimes);

    const content = useMemo(() => {
        return openingTimes?.map(({ endTime, startTime, id, type, closed }) => (
            <OpeningTime
                key={id}
                endTime={endTime}
                startTime={startTime}
                type={type}
                closed={closed}
            />
        ));
    }, [openingTimes]);

    return (
        <div className="opening-times">
            {openingTimes && content && (
                <>
                    <h3>Öffnungszeiten</h3>
                    <div className="opening-times__content">
                        <Masonry columns={{ xs: 1, sm: 2, md: 2, lg: 3 }} spacing={2}>
                            {content}
                        </Masonry>
                    </div>
                </>
            )}
        </div>
    );
};

OpeningTimes.displayName = 'OpeningTimes';

export default OpeningTimes;
