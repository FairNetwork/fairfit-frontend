import './emptyHeader.scss';
import Icon from '../../icon/Icon';
import { useIsMobile } from '../../../../hooks/environment';
import { useSidebarProvider } from '../../sidebar/SidebarProvider';

const EmptyHeader = () => {
    const isMobile = useIsMobile();
    const { updateIsOpen } = useSidebarProvider();

    return (
        <div className="empty-header">
            {isMobile && (
                <div id="sidebar-toggle">
                    <Icon
                        icon="fas fa-bars"
                        onClick={() =>
                            typeof updateIsOpen === 'function' ? updateIsOpen(true) : undefined
                        }
                    />
                </div>
            )}
            <div className="empty-header__name">FairFit</div>
        </div>
    );
};

EmptyHeader.displayName = 'EmptyHeader';

export default EmptyHeader;
