import './utilityHeader.scss';
import { useMemo } from 'react';
import GymMenu from '../../shared/gym-menu/GymMenu';
import { useAppSelector } from '../../../hooks/redux';
import { getGymId, getPathFromUrl } from '../../../utils/routes';
import { selectGymName } from '../../../redux/gym/selectors';
import { GYM_MENU_ITEMS, HOMEPAGE_MENU_ITEMS } from '../../../constants/menu';

const UtilityHeader = () => {
    const gymName = useAppSelector(selectGymName);

    const isGymPage = useMemo(() => {
        return getGymId() !== 'fairfit';
    }, []);

    const type = getPathFromUrl();

    const slogan = useMemo(() => {
        switch (type) {
            case 'data-protection':
                return 'Datenschutz liegt uns am Herzen!';
            case 'general':
                return 'Vertrauen und Transparenz – für eine klare Kommunikation.';
            case 'q-and-a':
                return 'Ihre Fragen, unsere Antworten!';
            case 'register-studio':
                return 'Registrieren Sie sich jetzt und starten Sie durch!';
            case 'revocation':
                return 'Widerruf leicht gemacht – Ihr Recht auf Rücktritt.';
            case 'terms-conditions':
                return 'Unsere AGB – fair und verständlich.';
            case 'impressum':
                return 'Impressum – Klarheit, die zählt.';
            default:
                return '';
        }
    }, [type]);

    return (
        <div className="utility-header">
            <h1 className="utility-header__title">{isGymPage ? gymName : 'FairFit'}</h1>
            <h1 className="utility-header__slogan">{slogan}</h1>
            <GymMenu items={isGymPage ? GYM_MENU_ITEMS : HOMEPAGE_MENU_ITEMS} />
        </div>
    );
};

UtilityHeader.displayName = 'UtilityHeader';

export default UtilityHeader;
