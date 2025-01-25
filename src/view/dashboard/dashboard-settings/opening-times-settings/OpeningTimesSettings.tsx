import './openingTimesSettings.scss';
import { useMemo } from 'react';
import { OpeningTimeType } from '../../../../types/openingTimes';
import OpeningTimeInput from './opening-time-input/OpeningTimeInput';

const OpeningTimesSettings = () => {
    const content = useMemo(() => {
        return Object.keys(OpeningTimeType)
            .filter((key) => !isNaN(Number(key)))
            .map((openingTimeType) => {
                return <OpeningTimeInput type={Number(openingTimeType)} />;
            });
    }, []);

    return (
        <div className="opening-times-settings">
            <div className="opening-times-settings__headline">Öffnungszeiten</div>
            <div className="opening-times-settings__wrapper">{content}</div>
        </div>
    );
};

OpeningTimesSettings.displayName = 'OpeningTimesSettings';

export default OpeningTimesSettings;
