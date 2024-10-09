import './benefits.scss';
import { useAppSelector } from '../../../../../hooks/redux';
import { selectBenefits } from '../../../../../redux/gym/selectors';
import Icon from '../../../../shared/icon/Icon';
import React, { ReactElement, useMemo } from 'react';
import { IBenefit } from '../../../../../types/benefit';

const Benefits = () => {
    const benefits = useAppSelector(selectBenefits);

    const handleAdd = () => {};

    const handleRemove = (id: IBenefit['id']) => {};

    const content = useMemo(() => {
        const items: ReactElement[] = [];

        benefits?.forEach(({ id, imageUrl }) => {
            items.push(
                <div className="benefits__content__image">
                    <img key={`benefit-dashboard--${id}`} src={imageUrl} alt="Benefit Bild" />
                    <div className="benefits__content__image__icon">
                        <Icon
                            icon="bi bi-trash3-fill"
                            onClick={() => handleRemove(id)}
                            color="white"
                        />
                    </div>
                </div>
            );
        });

        return items;
    }, [benefits]);

    return (
        <div className="benefits">
            <h2 id="table-benefits">Leistungen</h2>
            <i>
                Liste besondere Vorteile auf, die dein Studio von anderen abhebt, um potenzielle
                Mitglieder anzuziehen.
            </i>
            <div className="benefits__content">
                <div className="benefits__content__add" onClick={handleAdd}>
                    <Icon icon="bi bi-plus-lg" onClick={handleAdd} size={80} color="white" />
                </div>
                {content}
            </div>
        </div>
    );
};

Benefits.displayName = 'Benefits';

export default Benefits;
