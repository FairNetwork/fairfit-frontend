import './openingTimeInput.scss';
import { FC } from 'react';
import { useOpeningTimeInput } from '../../../../../hooks/openingTimes';
import { OpeningTimeType } from '../../../../../types/openingTimes';
import Checkbox from '../../../../../components/shared/checkbox/Checkbox';

interface OpeningTimeInputProps {
    type: OpeningTimeType;
}

const OpeningTimeInput: FC<OpeningTimeInputProps> = ({ type }) => {
    const { openingTime, updateOpeningTime, name } = useOpeningTimeInput(type);

    const validateTime = (time: string) => {
        const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/; // Regex für Uhrzeit im Format HH:mm
        return timeRegex.test(time);
    };

    const handleChange = (value: string, isStartTime: boolean) => {
        if (value !== '' && !validateTime(value)) {
            return;
        }

        updateOpeningTime({
            startTime: isStartTime ? value : undefined,
            endTime: !isStartTime ? value : undefined
        });
    };

    return (
        <div className="opening-time-input">
            <div className="opening-time-input__name">
                {name}{' '}
                <Checkbox
                    label="Geschlossen"
                    isChecked={openingTime.closed}
                    onChange={(event) => updateOpeningTime({ closed: event.target.checked })}
                />
            </div>
            <div className="opening-time-input__inputs">
                <input
                    type="time"
                    placeholder="Startzeit"
                    value={openingTime.startTime}
                    onChange={(event) => handleChange(event.target.value, true)}
                />
                <p>-</p>
                <input
                    type="time"
                    placeholder="Endzeit"
                    value={openingTime.endTime}
                    onChange={(event) => handleChange(event.target.value, false)}
                />
            </div>
        </div>
    );
};

OpeningTimeInput.displayName = 'OpeningTimeInput';

export default OpeningTimeInput;
