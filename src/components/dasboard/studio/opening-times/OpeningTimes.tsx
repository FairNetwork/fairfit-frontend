import 'dayjs/locale/de';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import './openingTimes.scss';
import { useMemo } from 'react';
import { OPENING_TIMES } from '../../../../constants/dashboard';
import OpeningTime from './opening-time/OpeningTime';

const OpeningTimes = () => {
    const content = useMemo(() => {
        return OPENING_TIMES.map((type) => {
            return <OpeningTime type={type} key={type} />;
        });
    }, []);

    return (
        <div className="opening-times">
            <h3>Öffnungszeiten</h3>
            <i>
                Gib die Öffnungszeiten deines Studios an, damit Kunden genau wissen, wann sie dich
                erreichen können.
            </i>
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="de">
                {content}
            </LocalizationProvider>
        </div>
    );
};

OpeningTimes.displayName = 'OpeningTimes';

export default OpeningTimes;
