import { MultiInputTimeRangeField } from '@mui/x-date-pickers-pro/MultiInputTimeRangeField';
import 'dayjs/locale/de';
import { OpeningTimeType, TmpOpeningTimes } from '../../../../../types/openingTimes';
import './openingTime.scss';
import { convertDay } from '../../../../../utils/text';
import { useAppDispatch, useAppSelector } from '../../../../../hooks/redux';
import { selectOpeningTimeByType } from '../../../../../redux/gym/selectors';
import { useEffect, useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';

interface OpeningTimeProps {
    type: OpeningTimeType;
}

const OpeningTime = ({ type }: OpeningTimeProps) => {
    const dispatch = useAppDispatch();

    const [time, setTime] = useState<TmpOpeningTimes>({
        id: 'tmp',
        type,
        endTime: null,
        startTime: null
    });

    const stateTime = useAppSelector((state) => selectOpeningTimeByType(state, type));

    useEffect(() => {
        if (stateTime) {
            setTime({
                ...stateTime,
                startTime: dayjs(stateTime.startTime, 'HH:mm:ss'),
                endTime: dayjs(stateTime.endTime, 'HH:mm:ss')
            });
        }
    }, [stateTime]);

    const handleChange = (value: [Dayjs | null, Dayjs | null]) => {
        console.log(value);

        setTime((prevState) => {
            if (value[0] !== null) {
                return { ...prevState, startTime: value[0] };
            }

            if (value[1] !== null) {
                return { ...prevState, endTime: value[1] };
            }

            return prevState;
        });

        // updateOpeningTimeAction;
    };

    return (
        <div className="opening-time">
            <p>{convertDay(type)}</p>
            <div className="opening-time__time">
                <MultiInputTimeRangeField
                    value={[time.startTime, time.endTime]}
                    onChange={handleChange}
                    slotProps={{
                        textField: ({ position }) => ({
                            label: position === 'start' ? 'Von' : 'Bis'
                        })
                    }}
                    format="HH:mm"
                />
            </div>
        </div>
    );
};

OpeningTime.displayName = 'OpeningTime';

export default OpeningTime;
