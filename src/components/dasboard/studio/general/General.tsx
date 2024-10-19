import './general.scss';
import { ChangeEvent, useEffect, useState } from 'react';
import { Box, Grid2, TextField } from '@mui/material';
import { useAppSelector } from '../../../../hooks/redux';
import { selectGymAddress, selectGymName } from '../../../../redux/gym/selectors';

const General = () => {
    const stateName = useAppSelector(selectGymName);
    const stateAddress = useAppSelector(selectGymAddress);

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');

    useEffect(() => {
        if (typeof stateName === 'string') {
            setName(stateName);
        }
    }, [stateName]);

    useEffect(() => {
        if (typeof stateAddress === 'string') {
            setAddress(stateAddress);
        }
    }, [stateAddress]);

    return (
        <div className="general">
            <h3>Studio Informationen</h3>
            <i>
                Passe die grundlegenden Details deines Studios an, um eine optimale Darstellung für
                deine Nutzer zu gewährleisten.
            </i>
            <div className="general__inputs">
                <Box sx={{ flexGrow: 1 }}>
                    <Grid2 container spacing={{ xs: 1, md: 2 }} columns={{ xs: 1, sm: 2, md: 12 }}>
                        <Grid2 size={{ xs: 12, sm: 6 }}>
                            <TextField
                                id="name"
                                label="Name"
                                variant="outlined"
                                value={name}
                                fullWidth
                                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                                    setName(event.target.value)
                                }
                            />
                        </Grid2>
                        <Grid2 size={{ xs: 12, sm: 6 }}>
                            <TextField
                                id="address"
                                label="Adresse"
                                variant="outlined"
                                value={address}
                                fullWidth
                                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                                    setAddress(event.target.value)
                                }
                            />
                        </Grid2>
                    </Grid2>
                </Box>
            </div>
        </div>
    );
};

General.displayName = 'General';

export default General;
