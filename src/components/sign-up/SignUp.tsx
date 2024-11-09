import './signUp.scss';
import NavigationBar from '../shared/navigation-bar/NavigationBar';
import ContentWrapper from '../shared/content-wrapper/ContentWrapper';
import Footer from '../shared/footer/Footer';
import { HOME_FOOTER_ITEMS } from '../../constants/footer';
import SignUpContent from './sign-up-content/SignUpContent';

const SignUp = () => {
    return (
        <div className="sign-up">
            <NavigationBar />
            <ContentWrapper>
                <SignUpContent />
            </ContentWrapper>
            <Footer items={HOME_FOOTER_ITEMS} />
        </div>
    );
};

SignUp.displayName = 'SignUp';

export default SignUp;
