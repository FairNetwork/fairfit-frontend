import './confirmRegistration.scss';
import ContentWrapper from '../shared/content-wrapper/ContentWrapper';
import Footer from '../shared/footer/Footer';
import { HOME_FOOTER_ITEMS } from '../../constants/footer';
import ConfirmRegistrationContent from './confirm-registration-content/ConfirmRegistrationContent';
import ConfirmRegistrationHeader from './confirm-registration-header/ConfirmRegistrationHeader';

const ConfirmRegistration = () => {
    return (
        <div className="confirm-registration">
            <ConfirmRegistrationHeader />
            <ContentWrapper>
                <ConfirmRegistrationContent />
            </ContentWrapper>
            <Footer items={HOME_FOOTER_ITEMS} />
        </div>
    );
};

ConfirmRegistration.displayName = 'ConfirmRegistration';

export default ConfirmRegistration;
