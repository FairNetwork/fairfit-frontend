import { MultiInputTimeRangeField } from '@mui/x-date-pickers-pro/MultiInputTimeRangeField';
import 'dayjs/locale/de';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { selectOpeningTimes } from '../../../../redux/gym/selectors';
import { selectFiles } from '../../../../utils/selectFiles';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import './openingTimes.scss';
import { useMemo } from 'react';
import { OpeningTimeType } from '../../../../types/openingTimes';
import { OPENING_TIMES } from '../../../../constants/dashboard';
import OpeningTime from './opening-time/OpeningTime';

const OpeningTimes = () => {
    const dispatch = useAppDispatch();

    const openingTimes = useAppSelector(selectOpeningTimes);

    const handleAdd = (files: File[]) => {};

    const handleRemoveImage = () => {};

    const handleChangeImage = async () => {
        const files = await selectFiles({ multiple: true, type: 'image/*' });

        if (files) {
            handleAdd(files);
        }
    };

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
