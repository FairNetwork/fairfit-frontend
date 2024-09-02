import './gymMenu.scss';
import { useContext, useMemo } from 'react';
import { GymContext } from '../../../components1/App';
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
                className="gym-menu__item"
                onClick={() => navigate(gymInternalId ? `/${gymInternalId}/${link}` : `/${link}`)}>
                {text}
            </div>
        ));
    }, [gymInternalId, items, navigate]);

    return <div className="gym-menu">{content}</div>;
};

GymMenu.displayName = 'GymMenu';

export default GymMenu;
