import './openingTime.scss';
import { IOpeningTimes } from '../../../../../types/openingTimes';
import { convertDay } from '../../../../../utils/text';

interface OpeningTimeProps {
    type: IOpeningTimes['type'];
    startTime: IOpeningTimes['startTime'];
    endTime: IOpeningTimes['endTime'];
    closed: IOpeningTimes['closed'];
}

const OpeningTime = ({ startTime, endTime, type, closed }: OpeningTimeProps) => {
    const day = convertDay(type);

    return (
        <div className="opening-time-gym">
            <div className="opening-time-gym__day">{day}</div>
            {closed ? (
                'Geschlossen'
            ) : (
                <div className="opening-time-gym__times">
                    {startTime.substring(0, startTime.length - 3)} -{' '}
                    {endTime.substring(0, endTime.length - 3)}
                </div>
            )}
        </div>
    );
};

OpeningTime.displayName = 'OpeningTime';

export default OpeningTime;
