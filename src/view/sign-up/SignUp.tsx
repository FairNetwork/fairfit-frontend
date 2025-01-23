import './signUp.scss';
import Input from '../../components/shared/input/Input';
import Button from '../../components/shared/button/Button';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Icon from '../../components/shared/icon/Icon';

const SignUp = () => {
    const navigate = useNavigate();

    const [shouldShowPassword, setShouldShowPassword] = useState(false);

    return (
        <div className="sign-up">
            <div className="sign-up__headline">
                Erstelle jetzt ein Konto und entdecke alle Vorteile von FairFit!
            </div>
            <Input value="" placeholder="Studio Name" />
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
            <Input
                value=""
                placeholder="Passwort wiederholen"
                type={!shouldShowPassword ? 'password' : undefined}
                rightElement={
                    <Icon
                        icon={shouldShowPassword ? 'fas fa-eye-slash' : 'fas fa-eye'}
                        onClick={() => setShouldShowPassword((prev) => !prev)}
                    />
                }
            />
            <Button>Registrieren</Button>
            <div className="sign-up__info">
                Bereits registriert? Melde dich&nbsp;
                <a onClick={() => navigate('/log-in')}>hier</a>
                &nbsp;an.
            </div>
        </div>
    );
};

SignUp.displayName = 'SignUp';

export default SignUp;
