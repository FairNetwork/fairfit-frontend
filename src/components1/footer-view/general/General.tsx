import './general.scss';
import { IGym } from '../../../types/gym';

interface GeneralProps {
    gymId?: IGym['internalId'];
}

const General = ({ gymId }: GeneralProps) => {
    return (
        <div className="general">
            <h3 className="general__headline">Allgemein</h3>
        </div>
    );
};

General.displayName = 'General';

export default General;
