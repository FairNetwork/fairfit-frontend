import './termsAndConditions.scss';
import { Gym } from '../../../types/gym';

interface TermsAndConditionsProps {
    gymId?: Gym['internalId'];
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
