import { MultiInputTimeRangeField } from '@mui/x-date-pickers-pro/MultiInputTimeRangeField';
import 'dayjs/locale/de';
import { OpeningTimeType, TmpOpeningTimes } from '../../../../../types/openingTimes';
import './openingTime.scss';
import { convertDay } from '../../../../../utils/text';
import { useAppDispatch, useAppSelector } from '../../../../../hooks/redux';
import { selectOpeningTimeByType } from '../../../../../redux/gym/selectors';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { updateOpeningTimeAction } from '../../../../../redux/gym/actions';
import { Checkbox, FormControlLabel } from '@mui/material';

interface OpeningTimeProps {
    type: OpeningTimeType;
}

const OpeningTime = ({ type }: OpeningTimeProps) => {
    const dispatch = useAppDispatch();

    const [time, setTime] = useState<TmpOpeningTimes>({
        id: 'tmp',
        type,
        endTime: null,
        startTime: null,
        closed: true
    });

    const timeoutRef = useRef(0);

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
        window.clearTimeout(timeoutRef.current);

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

        timeoutRef.current = window.setTimeout(() => {
            const { id, closed } = time;

            if (value[0] && value[1]) {
                void dispatch(
                    updateOpeningTimeAction({
                        type,
                        id,
                        startTime: value[0].format('HH:mm:ss'),
                        endTime: value[1].format('HH:mm:ss'),
                        closed
                    })
                );
            }
        }, 1000);
    };

    const handleCheckboxClick = (event: ChangeEvent<HTMLInputElement>) => {
        setTime((prevState) => {
            const newTime: TmpOpeningTimes = { ...prevState, closed: event.target.checked };

            void dispatch(
                updateOpeningTimeAction({
                    ...newTime,
                    startTime: newTime.startTime?.format('HH:mm:ss') ?? '',
                    endTime: newTime.endTime?.format('HH:mm:ss') ?? ''
                })
            );

            return newTime;
        });
    };

    return (
        <div className="opening-time">
            <div className="opening-time__day">
                <p>{convertDay(type)}</p>
                <FormControlLabel
                    control={<Checkbox checked={time.closed} onChange={handleCheckboxClick} />}
                    label="Geschlossen"
                />
            </div>
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
