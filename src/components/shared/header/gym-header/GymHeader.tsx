import './gymHeader.scss';
import { useScrollToElement } from '../../../../hooks/scroll';
import { useIsMobile } from '../../../../hooks/environment';
import { useSidebarProvider } from '../../sidebar/SidebarProvider';
import Icon from '../../icon/Icon';

const GymHeader = () => {
    const scrollToElement = useScrollToElement();
    const isMobile = useIsMobile();
    const { updateIsOpen } = useSidebarProvider();

    const gymName = 'EasyFitness';

    return (
        <div className="gym-header">
            <div className="gym-header__wrapper">
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
                <div className="gym-header__wrapper__name">{gymName}</div>
            </div>
            {!isMobile && (
                <div className="gym-header__actions">
                    <div
                        className="gym-header__actions__action"
                        onClick={() => scrollToElement('scroll-offers')}>
                        Angebote
                    </div>
                    <div
                        className="gym-header__actions__action"
                        onClick={() => scrollToElement('scroll-benefits')}>
                        Leistungen
                    </div>
                    <div
                        className="gym-header__actions__action"
                        onClick={() => scrollToElement('scroll-openingtimes')}>
                        Öffnungszeiten
                    </div>
                    <div
                        className="gym-header__actions__action"
                        onClick={() => scrollToElement('scroll-contact')}>
                        Kontakt
                    </div>
                </div>
            )}
        </div>
    );
};

GymHeader.displayName = 'GymHeader';

export default GymHeader;
