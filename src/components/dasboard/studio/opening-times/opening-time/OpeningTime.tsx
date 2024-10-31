import { MultiInputTimeRangeField } from '@mui/x-date-pickers-pro/MultiInputTimeRangeField';
import 'dayjs/locale/de';
import { OpeningTimeType } from '../../../../../types/openingTimes';
import { useAppDispatch } from '../../../../../hooks/redux';
import './openingTime.scss';
import { convertDay } from '../../../../../utils/text';

interface OpeningTimeProps {
    type: OpeningTimeType;
}

const OpeningTime = ({ type }: OpeningTimeProps) => {
    const dispatch = useAppDispatch();

    return (
        <div className="opening-time">
            <p>{convertDay(type)}</p>
            <div className="opening-time__time">
                <MultiInputTimeRangeField
                    slotProps={{
                        textField: ({ position }) => ({
                            label: position === 'start' ? 'Von' : 'Bis'
                        })
                    }}
                />
            </div>
        </div>
    );
};

OpeningTime.displayName = 'OpeningTime';

export default OpeningTime;
