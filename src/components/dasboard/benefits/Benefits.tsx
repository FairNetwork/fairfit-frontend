import React, { useMemo, DragEvent } from 'react';
import './benefits.scss';
import { useAppSelector } from '../../../hooks/redux';
import { selectBenefits } from '../../../redux/gym/selectors';
import { IBenefit } from '../../../types/benefit';
import Icon from '../../shared/icon/Icon';
import { selectFiles } from '../../../utils/selectFiles';

const Benefits = () => {
    const benefits = useAppSelector(selectBenefits);

    const handleAdd = (files: File[]) => {
        console.log(files);
    };

    const handleRemove = (id: IBenefit['id']) => {};

    const handleUploadClick = async () => {
        const files = await selectFiles({ multiple: true, type: 'image/*' });

        if (files) {
            handleAdd(files);
        }
    };

    const handleDrop = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const draggedFiles = Array.from(e.dataTransfer.files) as File[];

        handleAdd(draggedFiles);
    };

    const content = useMemo(() => {
        return benefits?.map(({ id, imageUrl }) => (
            <div className="dashboard-benefits__content__image">
                <img key={`benefit-dashboard--${id}`} src={imageUrl} alt="Benefit Bild" />
                <div className="dashboard-benefits__content__image__icon">
                    <Icon icon="bi bi-trash3-fill" onClick={() => handleRemove(id)} color="white" />
                </div>
            </div>
        ));
    }, [benefits]);

    return (
        <div className="dashboard-benefits">
            <i>
                Liste besondere Vorteile auf, die dein Studio von anderen abhebt, um potenzielle
                Mitglieder anzuziehen.
            </i>
            <div
                className="dashboard-benefits__upload"
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => void handleDrop(e)}>
                <Icon icon="bi bi-upload" size={30} />
                <div className="dashboard-benefits__upload__text">
                    Drag your file(s) here or&nbsp;
                    <span onClick={() => void handleUploadClick()}>browse</span>
                </div>
            </div>
            <h4>Deine Leistungen</h4>
            <div className="dashboard-benefits__content">{content}</div>
        </div>
    );
};

Benefits.displayName = 'Benefits';

export default Benefits;
