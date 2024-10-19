import './studio.scss';
import { ChangeEvent, useState } from 'react';
import { Box, Grid2, TextField } from '@mui/material';
import SocialMedia from './social-media/SocialMedia';

const Studio = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');

    return (
        <div className="studio">
            <div className="studio__inputs">
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
            <SocialMedia />
        </div>
    );
};

Studio.displayName = 'Studio';

export default Studio;
