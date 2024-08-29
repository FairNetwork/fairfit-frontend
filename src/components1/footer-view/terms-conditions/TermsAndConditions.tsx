import './termsAndConditions.scss';
import { IGym } from '../../../types/gym';

interface TermsAndConditionsProps {
    gymId?: IGym['internalId'];
}

const TermsAndConditions = ({ gymId }: TermsAndConditionsProps) => {
    // ToDo load data

    return (
        <div className="terms-conditions">
            <h3 className="terms-conditions__headline">AGB</h3>
        </div>
    );
};

TermsAndConditions.displayName = 'TermsAndConditions';

export default TermsAndConditions;
