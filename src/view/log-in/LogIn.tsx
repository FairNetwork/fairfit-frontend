import './logIn.scss';
import Input from '../../components/shared/input/Input';
import Button from '../../components/shared/button/Button';
import { useNavigate } from 'react-router-dom';

const LogIn = () => {
    const navigate = useNavigate();

    return (
        <div className="log-in">
            <Input value="" placeholder="E-Mail" />
            <Input value="" placeholder="Passwort" type="password" />
            <Button>Anmelden</Button>
            <div className="log-in__info">
                Noch kein Konto? Registriere dein Studio&nbsp;
                <a onClick={() => navigate('/sign-in')}>hier.</a>
            </div>
        </div>
    );
};

LogIn.displayName = 'LogIn';

export default LogIn;
