import 'dayjs/locale/de';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import './openingTimes.scss';
import { useMemo } from 'react';
import { OPENING_TIMES } from '../../../../constants/dashboard';
import OpeningTime from './opening-time/OpeningTime';
import { Box, Grid } from '@mui/material';

const OpeningTimes = () => {
    const content = useMemo(() => {
        return OPENING_TIMES.map((type) => (
            <Grid item xs={12} sm={6} key={type}>
                <OpeningTime type={type} />
            </Grid>
        ));
    }, []);

    return (
        <div className="opening-times">
            <h3>Öffnungszeiten</h3>
            <i>
                Gib die Öffnungszeiten deines Studios an, damit Kunden genau wissen, wann sie dich
                erreichen können.
            </i>
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="de">
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        {content}
                    </Grid>
                </Box>
            </LocalizationProvider>
        </div>
    );
};

OpeningTimes.displayName = 'OpeningTimes';

export default OpeningTimes;
