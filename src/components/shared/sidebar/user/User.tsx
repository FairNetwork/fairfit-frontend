import Button from '../../button/Button';
import './user.scss';

const User = () => {
    return (
        <div className="user">
            <div className="user__login-button">
                <Button>Anmelden</Button>
            </div>
        </div>
    );
};

User.displayName = 'User';

export default User;
