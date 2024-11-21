import { useAppSelector } from '../../../../hooks/redux';
import './offers.scss';
import { selectAbonnements } from '../../../../redux/gym/selectors';
import CardSlider from '../../../shared/card-slider/CardSlider';

const Offers = () => {
    const abonnements = useAppSelector(selectAbonnements);

    return (
        <div className="offers">
            {(abonnements ?? []).length > 0 && (
                <>
                    <h3>Abonnements | Angebote</h3>
                    <div className="offers__content">
                        <CardSlider items={abonnements} />
                    </div>
                </>
            )}
        </div>
    );
};

Offers.displayName = 'Offers';

export default Offers;
