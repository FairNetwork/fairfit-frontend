import './notAvailable.scss';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/shared/icon/Icon';

const NotAvailable = () => {
    const navigate = useNavigate();

    return (
        <div className="not-available">
            <div className="not-available__icon">
                <Icon icon="bi-heartbreak" size={200} />
            </div>
            <div className="not-available__text">Diese Page ist nicht verfügbar</div>
            <div className="not-available__link" onClick={() => navigate('/')}>
                Zur HomePage
            </div>
        </div>
    );
};

NotAvailable.displayName = 'NotAvailable';

export default NotAvailable;
