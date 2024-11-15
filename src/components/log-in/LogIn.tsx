import './logIn.scss';
import ContentWrapper from '../shared/content-wrapper/ContentWrapper';
import LogInContent from './log-in-content/LogInContent';

const LogIn = () => {
    return (
        <div className="log-in">
            <ContentWrapper>
                <LogInContent />
            </ContentWrapper>
        </div>
    );
};

LogIn.displayName = 'LogIn';

export default LogIn;
