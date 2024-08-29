import './dataProtection.scss';
import { IGym } from '../../../types/gym';

interface DataProtectionProps {
    gymId?: IGym['internalId'];
}

const DataProtection = ({ gymId }: DataProtectionProps) => {
    return (
        <div className="data-protection">
            <h3 className="data-protection__headline">Datenschutz</h3>
        </div>
    );
};

DataProtection.displayName = 'DataProtection';

export default DataProtection;
