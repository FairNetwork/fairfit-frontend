import { FormControlLabel, Radio, RadioGroup, TextField } from '@mui/material';
import './personalData.scss';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { selectUser } from '../../../../redux/user/selectors';
import { updateUserField } from '../../../../redux/user/slice';
import { ChangeEvent } from 'react';

const PersonalData = () => {
    const dispatch = useAppDispatch();

    const { email, birthday, firstName, lastName, gender } = useAppSelector(selectUser);

    return (
        <div className="personal-data">
            <h2>Persönliche Daten</h2>
            <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                onChange={(_: ChangeEvent<HTMLInputElement>, value: string) =>
                    dispatch(updateUserField({ key: 'gender', value: Number(value) }))
                }>
                <FormControlLabel
                    value={0}
                    control={<Radio checked={gender === 0} />}
                    label="Männlich"
                />
                <FormControlLabel
                    value={1}
                    control={<Radio checked={gender === 1} />}
                    label="Weiblich"
                />
                <FormControlLabel
                    value={2}
                    control={<Radio checked={gender === 2} />}
                    label="Divers"
                />
            </RadioGroup>
            <TextField
                id="firstname"
                label="Vorname"
                variant="outlined"
                value={firstName}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    dispatch(updateUserField({ key: 'firstName', value: event.target.value }))
                }
            />
            <TextField
                id="lastname"
                label="Nachname"
                variant="outlined"
                value={lastName}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    dispatch(updateUserField({ key: 'lastName', value: event.target.value }))
                }
            />
            <TextField
                id="birthday"
                label="Geburtstag"
                variant="outlined"
                type="date"
                value={birthday}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    dispatch(updateUserField({ key: 'birthday', value: event.target.value }))
                }
                InputLabelProps={{ shrink: true }}
            />
            <TextField
                id="email"
                label="E-Mail"
                variant="outlined"
                type="email"
                value={email}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    dispatch(updateUserField({ key: 'email', value: event.target.value }))
                }
            />
        </div>
    );
};

PersonalData.displayName = 'PersonalData';

export default PersonalData;
