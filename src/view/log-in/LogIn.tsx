import './logIn.scss';
import Input from '../../components/shared/input/Input';
import Button from '../../components/shared/button/Button';
import { useNavigate } from 'react-router-dom';
import Icon from '../../components/shared/icon/Icon';
import { useState } from 'react';

const LogIn = () => {
    const navigate = useNavigate();

    const [shouldShowPassword, setShouldShowPassword] = useState(false);
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="log-in">
            <div className="log-in__headline">
                Melden dich an und mache genau dort weiter, wo du aufgehört hast!
            </div>
            <Input
                value={mail}
                placeholder="E-Mail"
                onChange={(event) => setMail(event.target.value)}
            />
            <Input
                value={password}
                placeholder="Passwort"
                onChange={(event) => setPassword(event.target.value)}
                type={!shouldShowPassword ? 'password' : undefined}
                rightElement={
                    <Icon
                        icon={shouldShowPassword ? 'fas fa-eye-slash' : 'fas fa-eye'}
                        style={{ width: '22px', textAlign: 'center' }}
                        onClick={() => setShouldShowPassword((prev) => !prev)}
                    />
                }
            />
            <Button>Anmelden</Button>
            <div className="log-in__info">
                Noch kein Konto? Registriere dein Studio&nbsp;
                <a onClick={() => navigate('/sign-up')}>hier.</a>
            </div>
        </div>
    );
};

LogIn.displayName = 'LogIn';

export default LogIn;
