import './logIn.scss';
import Input from '../../components/shared/input/Input';
import Button from '../../components/shared/button/Button';
import { useNavigate } from 'react-router-dom';
import Icon from '../../components/shared/icon/Icon';
import { useState } from 'react';

const LogIn = () => {
    const navigate = useNavigate();

    const [shouldShowPassword, setShouldShowPassword] = useState(false);

    return (
        <div className="log-in">
            <div className="log-in__headline">
                Melden dich an und mache genau dort weiter, wo du aufgehört hast!
            </div>
            <Input value="" placeholder="E-Mail" />
            <Input
                value=""
                placeholder="Passwort"
                type={!shouldShowPassword ? 'password' : undefined}
                rightElement={
                    <Icon
                        icon={shouldShowPassword ? 'fas fa-eye-slash' : 'fas fa-eye'}
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
