import './general.scss';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { Box, Grid2, TextField } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { selectGymAddress, selectGymName, selectGymSlogan } from '../../../../redux/gym/selectors';
import { updateGymAction } from '../../../../redux/gym/actions';

const General = () => {
    const dispatch = useAppDispatch();

    const stateName = useAppSelector(selectGymName);
    const stateAddress = useAppSelector(selectGymAddress);
    const stateSlogan = useAppSelector(selectGymSlogan);

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [slogan, setSlogan] = useState('');

    const timeoutRef = useRef(0);

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

    useEffect(() => {
        if (typeof stateSlogan === 'string') {
            setSlogan(stateSlogan);
        }
    }, [stateAddress]);

    const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target as HTMLInputElement;
        window.clearTimeout(timeoutRef.current);

        setName(value);

        timeoutRef.current = window.setTimeout(() => {
            void dispatch(updateGymAction({ name: value }));
        }, 1000);
    };

    const handleAddressChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target as HTMLInputElement;
        window.clearTimeout(timeoutRef.current);

        setAddress(value);

        timeoutRef.current = window.setTimeout(() => {
            void dispatch(updateGymAction({ address: value }));
        }, 1000);
    };

    const handleSloganChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target as HTMLInputElement;
        window.clearTimeout(timeoutRef.current);

        setSlogan(value);

        timeoutRef.current = window.setTimeout(() => {
            void dispatch(updateGymAction({ slogan: value }));
        }, 1000);
    };

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
                                onChange={handleNameChange}
                            />
                        </Grid2>
                        <Grid2 size={{ xs: 12, sm: 6 }}>
                            <TextField
                                id="address"
                                label="Adresse"
                                variant="outlined"
                                value={address}
                                fullWidth
                                onChange={handleAddressChange}
                            />
                        </Grid2>
                    </Grid2>
                </Box>
                <TextField
                    id="slogan"
                    label="Slogan"
                    multiline
                    fullWidth
                    maxRows={4}
                    onChange={handleSloganChange}
                    value={slogan}
                />
            </div>
        </div>
    );
};

General.displayName = 'General';

export default General;
