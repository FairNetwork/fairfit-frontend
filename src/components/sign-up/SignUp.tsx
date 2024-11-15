import './signUp.scss';
import ContentWrapper from '../shared/content-wrapper/ContentWrapper';
import SignUpContent from './sign-up-content/SignUpContent';

const SignUp = () => {
    return (
        <div className="sign-up">
            <ContentWrapper>
                <SignUpContent />
            </ContentWrapper>
        </div>
    );
};

SignUp.displayName = 'SignUp';

export default SignUp;
