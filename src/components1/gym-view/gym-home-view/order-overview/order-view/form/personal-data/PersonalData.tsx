// import { ChangeEvent } from 'react';
// import { FormControlLabel, Radio, RadioGroup, TextField } from '@mui/material';
// import './personalData.scss';
// import { useAppDispatch, useAppSelector } from '../../../../../../../hooks/redux';
// import { selectUser } from '../../../../../../../redux/user/selectors';
// import {
//     setBirthday,
//     setEmail,
//     setFirstName,
//     setGender,
//     setLastName
// } from '../../../../../../../redux/user/slice';
//
// const PersonalData = () => {
//     const dispatch = useAppDispatch();
//
//     const { email, birthday, firstName, lastName, gender } = useAppSelector(selectUser);
//
//     const handleGenderChange = (event: ChangeEvent<HTMLInputElement>, value: string) => {
//         dispatch(setGender(value));
//     };
//
//     const handleFirstNameChange = (event: ChangeEvent<HTMLInputElement>) => {
//         dispatch(setFirstName(event.target.value));
//     };
//
//     const handleLastNameChange = (event: ChangeEvent<HTMLInputElement>) => {
//         dispatch(setLastName(event.target.value));
//     };
//
//     const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
//         dispatch(setEmail(event.target.value));
//     };
//
//     const handleBirthdayChange = (event: ChangeEvent<HTMLInputElement>) => {
//         dispatch(setBirthday(event.target.value));
//     };
//
//     return (
//         <div className="personal-data">
//             <RadioGroup
//                 row
//                 aria-labelledby="demo-row-radio-buttons-group-label"
//                 name="row-radio-buttons-group"
//                 onChange={handleGenderChange}>
//                 <FormControlLabel
//                     value="Männlich"
//                     control={<Radio checked={gender === 'Männlich'} />}
//                     label="Männlich"
//                 />
//                 <FormControlLabel
//                     value="Weiblich"
//                     control={<Radio checked={gender === 'Weiblich'} />}
//                     label="Weiblich"
//                 />
//                 <FormControlLabel
//                     value="Divers"
//                     control={<Radio checked={gender === 'Divers'} />}
//                     label="Divers"
//                 />
//             </RadioGroup>
//             <TextField
//                 id="firstname"
//                 label="Vorname"
//                 variant="outlined"
//                 value={firstName}
//                 onChange={handleFirstNameChange}
//             />
//             <TextField
//                 id="lastname"
//                 label="Nachname"
//                 variant="outlined"
//                 value={lastName}
//                 onChange={handleLastNameChange}
//             />
//             <TextField
//                 id="birthday"
//                 label="Geburtstag"
//                 variant="outlined"
//                 type="date"
//                 value={birthday}
//                 onChange={handleBirthdayChange}
//                 InputLabelProps={{ shrink: true }}
//             />
//             <TextField
//                 id="email"
//                 label="E-Mail"
//                 variant="outlined"
//                 type="email"
//                 value={email}
//                 onChange={handleEmailChange}
//             />
//         </div>
//     );
// };
//
// PersonalData.displayName = 'PersonalData';
//
// export default PersonalData;
