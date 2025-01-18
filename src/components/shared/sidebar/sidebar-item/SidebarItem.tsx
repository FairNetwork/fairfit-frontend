import './sidebarItem.scss';
import Icon from '../../icon/Icon';
import { FC } from 'react';
import { useColorScheme } from '../../color-scheme-provider/ColorSchemeProvider';
import { useNavigate } from 'react-router-dom';
import { useIsCurrentRoute } from '../../../../hooks/route';

interface SidebarItemProps {
    /**
     * The icon of the item.
     */
    icon?: string;
    /**
     * The redirect route.
     */
    route: string;
    /**
     * The text of the item.
     */
    text: string;
}

const SidebarItem: FC<SidebarItemProps> = ({ icon, text, route }) => {
    const colorScheme = useColorScheme();
    const navigate = useNavigate();
    const isActive = useIsCurrentRoute(route);

    return (
        <div
            className="sidebar-item"
            onClick={() => navigate(route)}
            style={{ backgroundColor: isActive ? colorScheme?.color.primaryColor : undefined }}>
            {icon && <Icon icon={icon} />}
            {text}
        </div>
    );
};

SidebarItem.displayName = 'SidebarItem';

export default SidebarItem;
