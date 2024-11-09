import './gymMenu.scss';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../../hooks/redux';
import { selectCurrentGymId } from '../../../redux/gym/selectors';

export interface GymMenuItem {
    text: string;
    link: string;
    home?: boolean;
}

interface GymMenuProps {
    items: GymMenuItem[];
}

const GymMenu = ({ items }: GymMenuProps) => {
    const gymInternalId = useAppSelector(selectCurrentGymId);

    const navigate = useNavigate();

    const content = useMemo(() => {
        return items.map(({ text, link, home }) => (
            <div
                className="gym-menu__item"
                onClick={() => navigate(home ? `/${link}` : `/${gymInternalId}/${link}`)}>
                {text}
            </div>
        ));
    }, [gymInternalId, items, navigate]);

    return <div className="gym-menu">{content}</div>;
};

GymMenu.displayName = 'GymMenu';

export default GymMenu;
