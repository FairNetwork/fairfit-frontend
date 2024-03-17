import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag } from '@fortawesome/free-solid-svg-icons';
import './offerSlider.scss';

const OfferSlider = () => {
    return (
        <div className="offer-slider">
            <div className="offer-slider__icon">
                <FontAwesomeIcon icon={faTag} />
            </div>
            <div className="offer-slider__text">Angebote</div>
        </div>
    );
};

OfferSlider.displayName = 'OfferSlider';

export default OfferSlider;
