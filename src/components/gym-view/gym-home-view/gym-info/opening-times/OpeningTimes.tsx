import './openingTimes.scss';
import { useAppSelector } from '../../../../../hooks/redux';
import { ReactElement, useCallback, useContext, useMemo } from 'react';
import { GymContext } from '../../../../App';
import { RootState } from '../../../../../redux/store';
import { selectOpeningTimesById } from '../../../../../redux/gym/selectors';
import { convertDay } from '../../../../../utils/text';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const OpeningTimes = () => {
    const { gymInternalId } = useContext(GymContext);

    const openingTimesSelector = useCallback(
        (state: RootState) => selectOpeningTimesById(state, gymInternalId),
        [gymInternalId]
    );

    const openingTimes = useAppSelector(openingTimesSelector);

    const content = useMemo(() => {
        const items: ReactElement[] = [];

        if (!openingTimes) {
            return items;
        }

        openingTimes.forEach(({ day, startTime, endTime }) => {
            const convertedDay = convertDay(day);

            if (!convertedDay) {
                return;
            }

            items.push(
                <div className="opening-times__day" key={`opening-times__${day}`}>
                    <div className="opening-times__day__weekday">{convertedDay}</div>
                    <div className="opening-times__day__time">
                        {startTime} - {endTime}
                    </div>
                </div>
            );
        });

        return items;
    }, [openingTimes]);

    return (
        <div className="opening-times">
            <h2>Öffnungszeiten</h2>
            <div className="opening-times__content">
                <FontAwesomeIcon icon={faClock} size={'6x'} />
                <div className="opening-times__content__wrapper">{content}</div>
            </div>
        </div>
    );
};

OpeningTimes.displayName = 'OpeningTimes';

export default OpeningTimes;
