import './signUp.scss';
import Input from '../../components/shared/input/Input';
import Button from '../../components/shared/button/Button';
import { useNavigate } from 'react-router-dom';
import { useMemo, useState } from 'react';
import Icon from '../../components/shared/icon/Icon';

interface PasswordCriteria {
    text: string;
    isValid: boolean | null;
}

const SignUp = () => {
    const navigate = useNavigate();

    const [shouldShowPassword, setShouldShowPassword] = useState(false);
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [conditions, setConditions] = useState<PasswordCriteria[]>([
        { text: 'Mindestens 8 Zeichen', isValid: null },
        { text: 'Mindestens ein Großbuchstabe', isValid: null },
        { text: 'Mindestens eine Zahl', isValid: null },
        { text: 'Mindestens ein Sonderzeichen', isValid: null }
    ]);

    const validatePassword = (password: string) => {
        const updatedConditions = [
            { text: 'Mindestens 8 Zeichen', isValid: password.length >= 8 },
            { text: 'Mindestens ein Großbuchstabe', isValid: /[A-Z]/.test(password) },
            { text: 'Mindestens eine Zahl', isValid: /[0-9]/.test(password) },
            {
                text: 'Mindestens ein Sonderzeichen',
                isValid: /[!@#$%^&*(),.?":{}|<>]/.test(password)
            }
        ];
        setConditions(updatedConditions);
    };

    const isButtonDisabled = useMemo(() => {
        const allValid = conditions.every((condition) => condition.isValid === true);

        return !allValid || name.length === 0 || mail.length === 0 || password.length === 0;
    }, [name, mail, password, conditions]);

    const criteriaContent = useMemo(() => {
        return conditions.map((condition, index) => {
            const icon = !condition.isValid ? 'fas fa-xmark' : 'fas fa-check';

            return (
                <li
                    key={index}
                    className={
                        condition.isValid === null ? '' : condition.isValid ? 'valid' : 'invalid'
                    }>
                    <Icon icon={icon} style={{ width: '20px' }} />
                    {condition.text}
                </li>
            );
        });
    }, [conditions]);

    return (
        <div className="sign-up">
            <div className="sign-up__headline">
                Erstelle jetzt ein Konto und entdecke alle Vorteile von FairFit!
            </div>
            <Input
                value={name}
                placeholder="Studio Name"
                onChange={(event) => setName(event.target.value)}
            />
            <Input
                value={mail}
                placeholder="E-Mail"
                onChange={(event) => setMail(event.target.value)}
            />
            <Input
                value={password}
                placeholder="Passwort"
                onChange={(event) => {
                    setPassword(event.target.value);
                    validatePassword(event.target.value);
                }}
                type={!shouldShowPassword ? 'password' : undefined}
                rightElement={
                    <Icon
                        icon={shouldShowPassword ? 'fas fa-eye-slash' : 'fas fa-eye'}
                        style={{ width: '22px', textAlign: 'center' }}
                        onClick={() => setShouldShowPassword((prev) => !prev)}
                    />
                }
            />
            <ul>{criteriaContent}</ul>
            <Button isDisabled={isButtonDisabled}>Registrieren</Button>
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
