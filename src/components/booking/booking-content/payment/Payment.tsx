import { ChangeEvent, useEffect, useState } from 'react';
import { TextField } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { selectUser } from '../../../../redux/user/selectors';
import './payment.scss';
import { updateUserField } from '../../../../redux/user/slice';
import { isValidIBANNumber } from '../../../../utils/validation';

const Payment = () => {
    const dispatch = useAppDispatch();

    const [isIbanInvalid, setIsIbanInvalid] = useState<boolean>();
    const [tmpIban, setTmpIban] = useState('');

    const { iban, owner } = useAppSelector(selectUser);

    useEffect(() => {
        if (typeof iban === 'string' && iban.length > 0) {
            setTmpIban(iban);
        }
    }, [iban]);

    const handleIbanChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;

        setTmpIban(value);

        const isValid = isValidIBANNumber(value);

        setIsIbanInvalid(!isValid);

        if (isValid) {
            dispatch(updateUserField({ key: 'iban', value: event.target.value }));
        }
    };

    return (
        <div className="payment">
            <h2>Bezahlung</h2>
            <TextField
                id="owner"
                label="Kontoinhaber"
                variant="outlined"
                value={owner}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    dispatch(updateUserField({ key: 'owner', value: event.target.value }))
                }
            />
            <TextField
                id="iban"
                label="IBAN"
                variant="outlined"
                value={tmpIban}
                error={isIbanInvalid}
                onChange={handleIbanChange}
            />
        </div>
    );
};

Payment.displayName = 'Payment';

export default Payment;
