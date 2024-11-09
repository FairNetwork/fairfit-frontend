import './confirmRegistrationHeader.scss';
import Header from '../../shared/header/Header';

const ConfirmRegistrationHeader = () => {
    return (
        <div className="confirm-registration-header">
            <Header>
                <div className="confirm-registration-header__content">
                    <h1 className="confirm-registration-header__content__title">FairFit</h1>
                    <h1 className="confirm-registration-header__content__slogan">
                        the fair way to fitness, compare and achieve
                    </h1>
                </div>
            </Header>
        </div>
    );
};

ConfirmRegistrationHeader.displayName = 'ConfirmRegistrationHeader';

export default ConfirmRegistrationHeader;
