import { ChangeEvent } from 'react';
import './address.scss';
import { TextField } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../../../../../hooks/redux';
import { selectUser } from '../../../../../../../redux/user/selectors';
import { setNumber, setPlace, setPostcode, setStreet } from '../../../../../../../redux/user/slice';

const Address = () => {
    const dispatch = useAppDispatch();

    const { postcode, number, place, street } = useAppSelector(selectUser);

    const handleStreetChange = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(setStreet(event.target.value));
    };

    const handleNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(setNumber(event.target.value));
    };

    const handlePlaceChange = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(setPlace(event.target.value));
    };

    const handlePLZChange = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(setPostcode(event.target.value));
    };

    return (
        <div className="address">
            <div className="address__row">
                <div className="address__row__left-input">
                    <TextField
                        id="street"
                        label="Straße"
                        variant="outlined"
                        value={street}
                        onChange={handleStreetChange}
                        style={{ width: '100%' }}
                    />
                </div>
                <div className="address__row__right-input">
                    <TextField
                        id="number"
                        label="Nr."
                        variant="outlined"
                        value={number}
                        type="number"
                        onChange={handleNumberChange}
                        style={{ width: '100%' }}
                    />
                </div>
            </div>
            <div className="address__row">
                <div className="address__row__left-input">
                    <TextField
                        id="place"
                        label="Ort"
                        variant="outlined"
                        value={place}
                        onChange={handlePlaceChange}
                        style={{ width: '100%' }}
                    />
                </div>
                <div className="address__row__right-input">
                    <TextField
                        id="plz"
                        label="PLZ"
                        variant="outlined"
                        value={postcode}
                        type="number"
                        onChange={handlePLZChange}
                        style={{ width: '100%' }}
                    />
                </div>
            </div>
        </div>
    );
};

Address.displayName = 'Address';

export default Address;
