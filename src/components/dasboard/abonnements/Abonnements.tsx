import './abonnements.scss';
import { useAppSelector } from '../../../hooks/redux';
import { selectAbonnements } from '../../../redux/gym/selectors';
import CardSlider from '../../shared/card-slider/CardSlider';
import { Offer } from '../../../types/offer';
import Card from '../../shared/card-slider/card/Card';
import React from 'react';

const Abonnements = () => {
    const abonnements = useAppSelector(selectAbonnements);

    const handleAdd = () => {};

    const handleEdit = (id: Offer['id']) => {};

    return (
        <div className="abonnements">
            {abonnements?.map(
                ({ id, details, color, title, price, priceAfterDuration, duration, isOffer }) => {
                    return (
                        <Card
                            // onClick={() =>
                            //     typeof onEdit === 'function'
                            //         ? undefined
                            //         : navigate(`/${gymInternalId}/offers?id=${id}`)
                            // }
                            // onEdit={onEdit}
                            isSelected={false}
                            key={id}
                            id={id}
                            color={color}
                            title={title}
                            details={details}
                            price={price}
                            isOffer={isOffer}
                            priceAfterDuration={priceAfterDuration}
                            duration={duration}
                        />
                    );
                }
            )}
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
