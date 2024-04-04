import './general.scss';
import { Gym } from '../../../types/gym';

interface GeneralProps {
    gymId?: Gym['internalId'];
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
