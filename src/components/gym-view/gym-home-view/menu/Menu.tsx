import './menu.scss';
import { useContext, useMemo } from 'react';
import { GymContext } from '../../../App';
import { useNavigate } from 'react-router-dom';

const ITEMS = [
    { text: 'Angebote', link: 'offers' },
    { text: 'Geräte', link: 'geräte' },
    { text: 'Kurse', link: 'kurse' },
    { text: 'Sonstige Leistungen', link: 'sonstige_vorteile' }
];

const GymMenu = () => {
    const { gymInternalId } = useContext(GymContext);

    const navigate = useNavigate();

    const content = useMemo(() => {
        return ITEMS.map(({ text, link }) => (
            <div className="menu__item" onClick={() => navigate(`/${gymInternalId}/${link}`)}>
                {text}
            </div>
        ));
    }, [gymInternalId, navigate]);

    return <div className="menu">{content}</div>;
};

GymMenu.displayName = 'GymMenu';

export default GymMenu;
