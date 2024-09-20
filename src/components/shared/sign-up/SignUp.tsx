import { useAppDispatch } from '../../../hooks/redux';
import { ChangeEvent, useMemo, useState } from 'react';
import { Button, TextField } from '@mui/material';
import './signUp.scss';
import { registerStudio } from '../../../redux/login/actions';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const dispatch = useAppDispatch();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    const navigate = useNavigate();

    const isButtonDisabled = useMemo(() => {
        return (
            !name ||
            !email ||
            !password ||
            !passwordConfirmation ||
            password !== passwordConfirmation
        );
    }, [email, name, password, passwordConfirmation]);

    const passwordCriteria = useMemo(() => {
        return {
            length: password.length >= 8,
            uppercase: /[A-Z]/.test(password),
            lowercase: /[a-z]/.test(password),
            number: /\d/.test(password),
            special: /[!@#$%^&*(),.?":{}|<>]/.test(password)
        };
    }, [password]);

    const isPasswordInvalid = useMemo(() => {
        const { length, lowercase, number, special, uppercase } = passwordCriteria;
        return !length || !lowercase || !uppercase || !lowercase || !number || !special;
    }, [passwordCriteria]);

    const handleRegisterStudio = async () => {
        const wasSuccessful = await dispatch(registerStudio({ name, email, password }));

        if (wasSuccessful) {
            navigate('/confirm-registration');
        }
    };

    const handleClick = () => {
        void handleRegisterStudio();
    };

    return (
        <div className="sign-up">
            <TextField
                id="name"
                label="Studioname"
                variant="outlined"
                value={name}
                onChange={(event: ChangeEvent<HTMLInputElement>) => setName(event.target.value)}
            />
            <div className="sign-up__group">
                <div className="sign-up__group__hint">
                    Die E-Mail sollte sich von der Kontakt-E-Mail unterscheiden
                </div>
                <div style={{ marginTop: 10 }} />
                <TextField
                    id="email"
                    label="E-Mail"
                    variant="outlined"
                    value={email}
                    style={{ width: '100%' }}
                    onChange={(event: ChangeEvent<HTMLInputElement>) =>
                        setEmail(event.target.value)
                    }
                />
            </div>
            <div className="sign-up__group">
                <div className="sign-up__group__hint">
                    Dein Passwort muss folgende Kriterien erfüllen:
                    <ul className="sign-up__group__hint__requirements">
                        <li
                            className={
                                passwordCriteria.length
                                    ? 'valid'
                                    : 'sign-up__group__hint__requirements__invalid'
                            }>
                            Mindestens 8 Zeichen
                        </li>
                        <li
                            className={
                                passwordCriteria.uppercase
                                    ? 'valid'
                                    : 'sign-up__group__hint__requirements__invalid'
                            }>
                            Mindestens 1 Großbuchstabe
                        </li>
                        <li
                            className={
                                passwordCriteria.lowercase
                                    ? 'valid'
                                    : 'sign-up__group__hint__requirements__invalid'
                            }>
                            Mindestens 1 Kleinbuchstabe
                        </li>
                        <li
                            className={
                                passwordCriteria.number
                                    ? 'valid'
                                    : 'sign-up__group__hint__requirements__invalid'
                            }>
                            Mindestens 1 Zahl
                        </li>
                        <li
                            className={
                                passwordCriteria.special
                                    ? 'valid'
                                    : 'sign-up__group__hint__requirements__invalid'
                            }>
                            Mindestens 1 Sonderzeichen
                        </li>
                    </ul>
                </div>
                <TextField
                    id="password"
                    label="Passwort"
                    error={isPasswordInvalid}
                    variant="outlined"
                    type="password"
                    style={{ width: '100%' }}
                    value={password}
                    onChange={(event: ChangeEvent<HTMLInputElement>) =>
                        setPassword(event.target.value)
                    }
                />
            </div>
            <TextField
                id="password_confirmation"
                label="Passwort wiederholen"
                type="password"
                variant="outlined"
                error={password !== passwordConfirmation}
                value={passwordConfirmation}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    setPasswordConfirmation(event.target.value)
                }
            />
            <div className="sign-up__button">
                <Button variant="contained" disabled={isButtonDisabled} onClick={handleClick}>
                    Registrieren
                </Button>
            </div>
        </div>
    );
};

SignUp.displayName = 'SignUp';

export default SignUp;
