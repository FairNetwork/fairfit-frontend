import './utilityContent.scss';
import { useLocation } from 'react-router-dom';
import { useMemo } from 'react';
import { getGymFromRoute } from '../../../utils/routes';

const UtilityContent = () => {
    const location = useLocation();

    const heading = useMemo(() => {
        const { pathname } = location;

        const type = getGymFromRoute(pathname);

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
    }, [location]);

    return (
        <div className="utility-content">
            <h3>{heading}</h3>
        </div>
    );
};

UtilityContent.displayName = 'UtilityContent';

export default UtilityContent;
