import './openingTime.scss';
import { IOpeningTimes } from '../../../../../types/openingTimes';
import { convertDay } from '../../../../../utils/text';

interface OpeningTimeProps {
    type: IOpeningTimes['type'];
    startTime: IOpeningTimes['startTime'];
    endTime: IOpeningTimes['endTime'];
}

const OpeningTime = ({ startTime, endTime, type }: OpeningTimeProps) => {
    const day = convertDay(type);

    return (
        <div className="opening-time">
            <div className="opening-time__day">{day}</div>
            <div className="opening-time__times">
                {startTime.substring(0, startTime.length - 3)} -{' '}
                {endTime.substring(0, endTime.length - 3)}
            </div>
        </div>
    );
};

OpeningTime.displayName = 'OpeningTime';

export default OpeningTime;
