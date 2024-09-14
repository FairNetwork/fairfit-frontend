import './openingTimes.scss';
import { useAppSelector } from '../../../../hooks/redux';
import { selectOpeningTimes } from '../../../../redux/gym/selectors';
import { useMemo } from 'react';
import OpeningTime from './opening-time/OpeningTime';

const OpeningTimes = () => {
    const openingTimes = useAppSelector(selectOpeningTimes);

    const content = useMemo(() => {
        return openingTimes?.map(({ endTime, startTime, id, type }) => (
            <OpeningTime key={id} endTime={endTime} startTime={startTime} type={type} />
        ));
    }, [openingTimes]);

    return (
        <div className="opening-times">
            {openingTimes && (
                <>
                    <h2>Öffnungszeiten</h2>
                    <div className="opening-times__content">{content}</div>
                </>
            )}
        </div>
    );
};

OpeningTimes.displayName = 'OpeningTimes';

export default OpeningTimes;
