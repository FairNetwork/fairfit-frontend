import './noContent.scss';
import { useNavigate } from 'react-router-dom';
import Icon from '../shared/icon/Icon';

const NoContent = () => {
    const navigate = useNavigate();

    return (
        <div className="no-content">
            <div className="no-content__icon">
                <Icon icon="bi-heartbreak" size={200} />
            </div>
            <div className="no-content__text">Diese Page ist nicht verfügbar</div>
            <div className="no-content__link" onClick={() => navigate('/')}>
                Zur HomePage
            </div>
        </div>
    );
};

NoContent.displayName = 'NoContent';

export default NoContent;
