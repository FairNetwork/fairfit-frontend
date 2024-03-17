import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceFrown } from '@fortawesome/free-regular-svg-icons';
import './notAvailable.scss';
import { useNavigate } from 'react-router-dom';

const NotAvailable = () => {
    const navigate = useNavigate();

    return (
        <div className="not-available">
            <div className="not-available__icon">
                <FontAwesomeIcon icon={faFaceFrown} size="2xl" />
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
