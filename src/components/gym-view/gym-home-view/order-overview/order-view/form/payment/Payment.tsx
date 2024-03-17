import { ChangeEvent } from 'react';
import { FormControlLabel, Radio, TextField } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../../../../../hooks/redux';
import { selectUser } from '../../../../../../../redux/user/selectors';
import { setIban, setOwner } from '../../../../../../../redux/user/slice';
import './payment.scss';

const Payment = () => {
    const dispatch = useAppDispatch();

    const { iban, owner } = useAppSelector(selectUser);

    const handleOwnerChange = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(setOwner(event.target.value));
    };

    const handleIbanChange = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(setIban(event.target.value));
    };

    return (
        <div className="payment">
            <TextField
                id="owner"
                label="Kontoinhaber"
                variant="outlined"
                value={owner}
                onChange={handleOwnerChange}
            />
            <TextField
                id="iban"
                label="IBAN"
                variant="outlined"
                value={iban}
                onChange={handleIbanChange}
            />
            {/* <FormControlLabel value="Männlich" control={<Radio/>} label="Männlich"/> */}
        </div>
    );
};

Payment.displayName = 'Payment';

export default Payment;
