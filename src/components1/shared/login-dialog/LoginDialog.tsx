// import './loginDialog.scss';
// import logo from '../../../assets/fairfit_logo.png';
// import {
//     Button,
//     FormControl,
//     FormControlLabel,
//     IconButton,
//     InputAdornment,
//     InputLabel,
//     OutlinedInput,
//     Radio,
//     TextField,
//     Tooltip
// } from '@mui/material';
// import { ChangeEvent, MouseEvent, useMemo, useState } from 'react';
// import Icon from '../../../components/shared/icon/Icon';
// import { isMobile } from '../../../utils/environment';
//
// interface LoginDialogProps {
//     onClose: () => void;
// }
//
// const LoginDialog = ({ onClose }: LoginDialogProps) => {
//     const [showPassword, setShowPassword] = useState(false);
//     const [password, setPassword] = useState('');
//     const [mail, setMail] = useState('');
//     const [shouldRemainLoggedIn, setShouldRemainLoggedIn] = useState(false);
//     const [isTooltipOpen, setIsTooltipOpen] = useState(false);
//
//     const isButtonDisabled = useMemo(() => {
//         return password.length === 0 || mail.length === 0;
//     }, [mail.length, password.length]);
//
//     const handleClickShowPassword = () => setShowPassword((show) => !show);
//
//     const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
//         event.preventDefault();
//     };
//
//     const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
//         setPassword(event.target.value);
//     };
//
//     const handleMailChange = (event: ChangeEvent<HTMLInputElement>) => {
//         setMail(event.target.value);
//     };
//
//     const handleRemainLoggedIn = () => {
//         setShouldRemainLoggedIn((prevState) => !prevState);
//     };
//
//     const handleButtonClick = () => {
//         // ToDo call login request
//
//         onClose();
//     };
//
//     return (
//         <div className="login-dialog">
//             <img alt="fairfit logo" src={logo} />
//             <h1>Studio Login</h1>
//             <TextField
//                 id="email"
//                 label="E-Mail Adresse"
//                 variant="outlined"
//                 value={mail}
//                 onChange={handleMailChange}
//                 style={{ width: '100%' }}
//             />
//             <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
//                 <InputLabel htmlFor="outlined-adornment-password">Passwort</InputLabel>
//                 <OutlinedInput
//                     id="outlined-adornment-password"
//                     type={showPassword ? 'text' : 'password'}
//                     onChange={handlePasswordChange}
//                     value={password}
//                     endAdornment={
//                         <InputAdornment position="end">
//                             <IconButton
//                                 aria-label="toggle password visibility"
//                                 onClick={handleClickShowPassword}
//                                 onMouseDown={handleMouseDownPassword}
//                                 edge="end">
//                                 {showPassword ? (
//                                     <Icon icon="bi-eye-slash-fill" />
//                                 ) : (
//                                     <Icon icon="bi-eye-fill" />
//                                 )}
//                             </IconButton>
//                         </InputAdornment>
//                     }
//                     label="Passwort"
//                 />
//             </FormControl>
//             <FormControlLabel
//                 value="remain-logged-in"
//                 control={<Radio checked={shouldRemainLoggedIn} onClick={handleRemainLoggedIn} />}
//                 label="Angemeldet bleiben"
//             />
//             <Tooltip
//                 title="Bitte gebe eine E-Mail Adresse und ein Passwort ein"
//                 open={isTooltipOpen}
//                 onClose={() => setIsTooltipOpen(false)}
//                 placement="top"
//                 arrow>
//                 <span
//                     onClick={() =>
//                         isButtonDisabled && isMobile() ? setIsTooltipOpen(true) : undefined
//                     }
//                     onMouseEnter={() => (isButtonDisabled ? setIsTooltipOpen(true) : undefined)}
//                     onMouseLeave={() => (isButtonDisabled ? setIsTooltipOpen(false) : undefined)}>
//                     <Button
//                         variant="contained"
//                         disabled={isButtonDisabled}
//                         onClick={handleButtonClick}>
//                         Anmelden
//                     </Button>
//                 </span>
//             </Tooltip>
//         </div>
//     );
// };
//
// LoginDialog.displayName = 'LoginDialog';
//
// export default LoginDialog;
