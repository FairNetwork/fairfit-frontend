import './revocation.scss';
import { Gym } from '../../../types/gym';

interface RevocationProps {
    gymId?: Gym['internalId'];
}

const Revocation = ({ gymId }: RevocationProps) => {
    return (
        <div className="revocation">
            <h3 className="revocation__headline">Widerruf</h3>
        </div>
    );
};

Revocation.displayName = 'Revocation';

export default Revocation;
