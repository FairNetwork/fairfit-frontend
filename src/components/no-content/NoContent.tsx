import './noContent.scss';
import { useNavigate } from 'react-router-dom';
import Icon from '../shared/icon/Icon';
import { motion } from 'framer-motion';

const NoContent = () => {
    const navigate = useNavigate();

    return (
        <motion.div
            className="no-content"
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}>
            <div className="no-content__icon">
                <Icon icon="bi bi-sign-dead-end" size={200} />
            </div>
            <div className="no-content__text">Diese Page ist nicht verfügbar</div>
            <div className="no-content__link" onClick={() => navigate('/')}>
                Zur HomePage
            </div>
        </motion.div>
    );
};

NoContent.displayName = 'NoContent';

export default NoContent;
