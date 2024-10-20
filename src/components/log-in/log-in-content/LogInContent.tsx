import './logInContent.scss';
import { Alert, Button, TextField } from '@mui/material';
import { ChangeEvent, useMemo, useState } from 'react';
import { useAppDispatch } from '../../../hooks/redux';
import { useNavigate } from 'react-router-dom';
import { logInStudio } from '../../../redux/login/actions';

const LogInContent = () => {
    const dispatch = useAppDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const navigate = useNavigate();

    const isButtonDisabled = useMemo(() => {
        return !email || !password;
    }, [email, password]);

    const handleLogInStudio = async () => {
        setError(false);

        const wasSuccessful = await dispatch(logInStudio({ email, password }));

        if (wasSuccessful) {
            navigate(-1);
        } else {
            setError(true);
        }
    };

    const handleClick = () => {
        void handleLogInStudio();
    };

    return (
        <div className="log-in-content">
            <p>Bitte melde dich an, um auf dein Studio zuzugreifen.</p>
            {error && (
                <Alert severity="error">Deine E-Mail und Passwort stimmen nicht überein.</Alert>
            )}
            <TextField
                id="email"
                label="E-Mail"
                variant="outlined"
                value={email}
                style={{ width: '100%' }}
                onChange={(event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
            />
            <TextField
                id="password"
                label="Passwort"
                variant="outlined"
                type="password"
                style={{ width: '100%' }}
                value={password}
                onChange={(event: ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)}
            />
            <div className="log-in-content__register">
                <p>
                    Noch kein Konto? Registriere dein Studio{' '}
                    <a onClick={() => navigate('/utility/register-studio?gymId=fairfit')}>hier.</a>
                </p>
            </div>
            <div className="log-in-content__button">
                <Button variant="contained" disabled={isButtonDisabled} onClick={handleClick}>
                    Anmelden
                </Button>
            </div>
        </div>
    );
};

LogInContent.displayName = 'LogInContent';

export default LogInContent;
