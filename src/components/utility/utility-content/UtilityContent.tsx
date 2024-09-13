import './utilityContent.scss';
import { useMemo } from 'react';
import { getPathFromUrl } from '../../../utils/routes';

const UtilityContent = () => {
    const type = getPathFromUrl();

    const heading = useMemo(() => {
        switch (type) {
            case 'data-protection':
                return 'Datenschutz';
            case 'general':
                return 'Allgemein';
            case 'q-and-a':
                return 'Q&A';
            case 'register-studio':
                return 'Studio anmelden';
            case 'revocation':
                return 'Widerruf';
            case 'terms-conditions':
                return 'AGB';
            case 'impressum':
                return 'Impressum';
            default:
                return '';
        }
    }, [type]);

    return (
        <div className="utility-content">
            <h3>{heading}</h3>
        </div>
    );
};

UtilityContent.displayName = 'UtilityContent';

export default UtilityContent;
