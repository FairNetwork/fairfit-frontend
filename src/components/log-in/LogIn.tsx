import './logIn.scss';
import ContentWrapper from '../shared/content-wrapper/ContentWrapper';
import LogInContent from './log-in-content/LogInContent';
import { motion } from 'framer-motion';

const LogIn = () => {
    return (
        <motion.div
            className="log-in"
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}>
            <ContentWrapper>
                <LogInContent />
            </ContentWrapper>
        </motion.div>
    );
};

LogIn.displayName = 'LogIn';

export default LogIn;
