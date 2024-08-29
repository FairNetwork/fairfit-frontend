import './registerStudio.scss';
import { Gym } from '../../../types/gym';

interface RegisterStudioProps {
    gymId?: Gym['internalId'];
}

const RegisterStudio = ({ gymId }: RegisterStudioProps) => {
    return (
        <div className="register-studio">
            <h3 className="register-studio__headline">Studio anmelden</h3>
        </div>
    );
};

RegisterStudio.displayName = 'RegisterStudio';

export default RegisterStudio;
