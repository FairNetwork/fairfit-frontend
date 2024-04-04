import './offerSlider.scss';
import Icon from '../../../shared/icon/Icon';

const OfferSlider = () => {
    return (
        <div className="offer-slider">
            <div className="offer-slider__icon">
                <Icon icon="bi-percent" />
            </div>
            <div className="offer-slider__text">Angebote</div>
        </div>
    );
};

OfferSlider.displayName = 'OfferSlider';

export default OfferSlider;
