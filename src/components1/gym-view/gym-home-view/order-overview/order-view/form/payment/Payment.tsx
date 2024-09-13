// import { ChangeEvent, useEffect, useState } from 'react';
// import { TextField } from '@mui/material';
// import { useAppDispatch, useAppSelector } from '../../../../../../../hooks/redux';
// import { selectUser } from '../../../../../../../redux/user/selectors';
// import { setIban, setOwner } from '../../../../../../../redux/user/slice';
// import './payment.scss';
// import { isValidIBANNumber } from '../../../../../../../utils1/validation';
//
// const Payment = () => {
//     const dispatch = useAppDispatch();
//
//     const [isIbanInvalid, setIsIbanInvalid] = useState<boolean>();
//     const [tmpIban, setTmpIban] = useState('');
//
//     const { iban, owner } = useAppSelector(selectUser);
//
//     useEffect(() => {
//         if (typeof iban === 'string' && iban.length > 0) {
//             setTmpIban(iban);
//         }
//     }, [iban]);
//
//     const handleOwnerChange = (event: ChangeEvent<HTMLInputElement>) => {
//         dispatch(setOwner(event.target.value));
//     };
//
//     const handleIbanChange = (event: ChangeEvent<HTMLInputElement>) => {
//         const { value } = event.target;
//
//         setTmpIban(value);
//
//         const isValid = isValidIBANNumber(value);
//
//         setIsIbanInvalid(!isValid);
//
//         if (isValid) {
//             dispatch(setIban(event.target.value));
//         }
//     };
//
//     return (
//         <div className="payment">
//             <TextField
//                 id="owner"
//                 label="Kontoinhaber"
//                 variant="outlined"
//                 value={owner}
//                 onChange={handleOwnerChange}
//             />
//             <TextField
//                 id="iban"
//                 label="IBAN"
//                 variant="outlined"
//                 value={tmpIban}
//                 error={isIbanInvalid}
//                 onChange={handleIbanChange}
//             />
//             {/* <FormControlLabel value="Männlich" control={<Radio/>} label="Männlich"/> */}
//         </div>
//     );
// };
//
// Payment.displayName = 'Payment';
//
// export default Payment;
