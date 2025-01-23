import Button from '../../button/Button';
import './user.scss';
import { useNavigate } from 'react-router-dom';

const User = () => {
    const navigate = useNavigate();

    return (
        <div className="user">
            <div className="user__login-button">
                <Button onClick={() => navigate('/log-in')}>Anmelden</Button>
            </div>
        </div>
    );
};

User.displayName = 'User';

export default User;
