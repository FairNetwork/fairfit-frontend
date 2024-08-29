import './revocation.scss';
import { IGym } from '../../../types/gym';

interface RevocationProps {
    gymId?: IGym['internalId'];
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
