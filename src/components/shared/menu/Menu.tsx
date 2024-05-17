import './menu.scss';
import { useContext, useMemo } from 'react';
import { GymContext } from '../../App';
import { useNavigate } from 'react-router-dom';

export interface GymMenuItem {
    text: string;
    link: string;
}

interface GymMenuProps {
    items: GymMenuItem[];
}

const GymMenu = ({ items }: GymMenuProps) => {
    const { gymInternalId } = useContext(GymContext);

    const navigate = useNavigate();

    const content = useMemo(() => {
        return items.map(({ text, link }) => (
            <div
                className="menu__item"
                onClick={() => navigate(gymInternalId ? `/${gymInternalId}/${link}` : `/${link}`)}>
                {text}
            </div>
        ));
    }, [gymInternalId, navigate, items]);

    return <div className="menu">{content}</div>;
};

GymMenu.displayName = 'GymMenu';

export default GymMenu;
