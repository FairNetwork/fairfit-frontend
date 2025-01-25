import './gymHeader.scss';
import { useScrollToElement } from '../../../../hooks/scroll';
import { useIsMobile } from '../../../../hooks/environment';
import { useSidebarProvider } from '../../sidebar/SidebarProvider';
import Icon from '../../icon/Icon';
import { useAppSelector } from '../../../../hooks/redux';
import { selectGymHeaderActions, selectGymName } from '../../../../redux/gym/selectors';

const GymHeader = () => {
    const scrollToElement = useScrollToElement();
    const isMobile = useIsMobile();
    const { updateIsOpen } = useSidebarProvider();

    const gymName = useAppSelector(selectGymName);
    const { hasAbonnements, hasOpeningTimes, hasSocialMedia, hasBenefits } =
        useAppSelector(selectGymHeaderActions);

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
                    {hasAbonnements && (
                        <div
                            className="gym-header__actions__action"
                            onClick={() => scrollToElement('scroll-offers')}>
                            Angebote
                        </div>
                    )}
                    {hasBenefits && (
                        <div
                            className="gym-header__actions__action"
                            onClick={() => scrollToElement('scroll-benefits')}>
                            Leistungen
                        </div>
                    )}
                    {hasOpeningTimes && (
                        <div
                            className="gym-header__actions__action"
                            onClick={() => scrollToElement('scroll-openingtimes')}>
                            Öffnungszeiten
                        </div>
                    )}
                    {hasSocialMedia && (
                        <div
                            className="gym-header__actions__action"
                            onClick={() => scrollToElement('scroll-contact')}>
                            Kontakt
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

GymHeader.displayName = 'GymHeader';

export default GymHeader;
