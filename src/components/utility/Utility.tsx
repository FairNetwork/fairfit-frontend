import './utility.scss';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import UtilityContent from './utility-content/UtilityContent';
import { motion } from 'framer-motion';

const Utility = () => {
    const navigate = useNavigate();

    useEffect(() => {
        //if (isGymPage && loadingState === 'rejected') {
        //  navigate('/no_content');
        //}
    }, [navigate]);

    return (
        <motion.div
            className="utility"
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}>
            <UtilityContent />
        </motion.div>
    );
};

Utility.displayName = 'Utility';

export default Utility;
