import './signUp.scss';
import ContentWrapper from '../shared/content-wrapper/ContentWrapper';
import SignUpContent from './sign-up-content/SignUpContent';
import { motion } from 'framer-motion';

const SignUp = () => {
    return (
        <motion.div
            className="sign-up"
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}>
            <ContentWrapper>
                <SignUpContent />
            </ContentWrapper>
        </motion.div>
    );
};

SignUp.displayName = 'SignUp';

export default SignUp;
