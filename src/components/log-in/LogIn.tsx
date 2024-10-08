import './logIn.scss';
import ContentWrapper from '../shared/content-wrapper/ContentWrapper';
import Footer from '../shared/footer/Footer';
import { HOME_FOOTER_ITEMS } from '../../constants/footer';
import LogInContent from './log-in-content/LogInContent';
import LogInHeader from './log-in-header/LogInHeader';

const LogIn = () => {
    return (
        <div className="confirm-registration">
            <LogInHeader />
            <ContentWrapper>
                <LogInContent />
            </ContentWrapper>
            <Footer items={HOME_FOOTER_ITEMS} />
        </div>
    );
};

LogIn.displayName = 'LogIn';

export default LogIn;
