import './gymHeader.scss';
import { useScrollToElement } from '../../../../hooks/scroll';

const GymHeader = () => {
    const scrollToElement = useScrollToElement();

    const gymName = 'EasyFitness';

    return (
        <div className="gym-header">
            <div className="gym-header__name">{gymName}</div>
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
        </div>
    );
};

GymHeader.displayName = 'GymHeader';

export default GymHeader;
