import './gymMenu.scss';
import { useContext, useMemo } from 'react';
import { GymContext } from '../../App';
import { useNavigate } from 'react-router-dom';

export interface GymMenuItem {
    text: string;
    link: string;
}

const MENU_ITEMS: GymMenuItem[] = [
    { text: 'Angebote', link: 'offers' },
    { text: 'Geräte', link: 'geräte' },
    { text: 'Kurse', link: 'kurse' },
    { text: 'Sonstige Leistungen', link: 'sonstige_vorteile' }
];

const GymMenu = () => {
    const { gymInternalId } = useContext(GymContext);

    const navigate = useNavigate();

    const content = useMemo(() => {
        return MENU_ITEMS.map(({ text, link }) => (
            <div
                className="menu__item"
                onClick={() => navigate(gymInternalId ? `/${gymInternalId}/${link}` : `/${link}`)}>
                {text}
            </div>
        ));
    }, [gymInternalId, navigate]);

    return <div className="menu">{content}</div>;
};

GymMenu.displayName = 'GymMenu';

export default GymMenu;
