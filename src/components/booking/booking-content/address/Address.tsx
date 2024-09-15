import { ChangeEvent } from 'react';
import './address.scss';
import { TextField } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { selectUser } from '../../../../redux/user/selectors';
import { updateUserField } from '../../../../redux/user/slice';

const Address = () => {
    const dispatch = useAppDispatch();

    const { postcode, number, place, street } = useAppSelector(selectUser);

    return (
        <div className="address">
            <h2>Anschrift</h2>
            <div className="address__row">
                <div className="address__row__left-input">
                    <TextField
                        id="street"
                        label="Straße"
                        variant="outlined"
                        value={street}
                        onChange={(event: ChangeEvent<HTMLInputElement>) =>
                            dispatch(updateUserField({ key: 'street', value: event.target.value }))
                        }
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
                        onChange={(event: ChangeEvent<HTMLInputElement>) =>
                            dispatch(updateUserField({ key: 'number', value: event.target.value }))
                        }
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
                        onChange={(event: ChangeEvent<HTMLInputElement>) =>
                            dispatch(updateUserField({ key: 'place', value: event.target.value }))
                        }
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
                        onChange={(event: ChangeEvent<HTMLInputElement>) =>
                            dispatch(
                                updateUserField({ key: 'postcode', value: event.target.value })
                            )
                        }
                        style={{ width: '100%' }}
                    />
                </div>
            </div>
        </div>
    );
};

Address.displayName = 'Address';

export default Address;
