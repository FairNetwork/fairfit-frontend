import './utilityHeader.scss';
import { useLocation } from 'react-router-dom';
import { useMemo } from 'react';
import GymMenu from '../../shared/gym-menu/GymMenu';
import { useAppSelector } from '../../../hooks/redux';
import { getGymId, getPathFromUrl } from '../../../utils/routes';
import { selectGymName } from '../../../redux/gym/selectors';

const HOMEPAGE_MENU_ITEMS = [{ text: 'HomePage', link: '' }];

const GYM_MENU_ITEMS = [
    { text: 'HomePage', link: '' },
    { text: 'Angebote', link: 'offers' },
    { text: 'Geräte', link: 'geräte' },
    { text: 'Kurse', link: 'kurse' },
    { text: 'Sonstige Leistungen', link: 'sonstige_vorteile' }
];

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
            case 'q-and-a':
            case 'register-studio':
            case 'revocation':
            case 'terms-conditions':
            case 'impressum':
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
