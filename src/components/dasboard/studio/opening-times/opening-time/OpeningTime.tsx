import { MultiInputTimeRangeField } from '@mui/x-date-pickers-pro/MultiInputTimeRangeField';
import 'dayjs/locale/de';
import './openingTime.scss';
import { OpeningTimeType } from '../../../../../types/openingTimes';
import { useAppDispatch } from '../../../../../hooks/redux';

interface OpeningTimeProps {
    type: OpeningTimeType;
}

const OpeningTime = ({ type }: OpeningTimeProps) => {
    const dispatch = useAppDispatch();

    return (
        <div className="opening-time">
            {content}
            <MultiInputTimeRangeField
                slotProps={{
                    textField: ({ position }) => ({
                        label: position === 'start' ? 'Von' : 'Bis'
                    })
                }}
            />
        </div>
    );
};

OpeningTime.displayName = 'OpeningTime';

export default OpeningTime;
