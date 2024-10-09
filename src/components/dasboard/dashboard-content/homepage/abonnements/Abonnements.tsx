import './abonnements.scss';
import { useAppSelector } from '../../../../../hooks/redux';
import { selectAbonnements } from '../../../../../redux/gym/selectors';
import CardSlider from '../../../../shared/card-slider/CardSlider';
import { Offer } from '../../../../../types/offer';

const Abonnements = () => {
    const abonnements = useAppSelector(selectAbonnements);

    const handleAdd = () => {};

    const handleEdit = (id: Offer['id']) => {};

    return (
        <div className="abonnements">
            <h2 id="table-abonnements">Abonnements</h2>
            <i>
                Stelle verschiedene Mitgliedschaftsoptionen vor. Füge Beschreibungen und Preise
                hinzu, um deinen Kunden die Wahl zu erleichtern.
            </i>
            <CardSlider items={abonnements} onEdit={handleEdit} onAdd={handleAdd} />
        </div>
    );
};

Abonnements.displayName = 'Abonnements';

export default Abonnements;
