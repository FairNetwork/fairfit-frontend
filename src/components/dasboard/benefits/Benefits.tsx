import React, { useMemo, DragEvent } from 'react';
import './benefits.scss';
import { useAppSelector } from '../../../hooks/redux';
import { selectBenefits } from '../../../redux/gym/selectors';
import { IBenefit } from '../../../types/benefit';
import Icon from '../../shared/icon/Icon';
import { selectFiles } from '../../../utils/selectFiles';
import { Box } from '@mui/material';
import { Masonry } from '@mui/lab';
import FileInput from '../../shared/file-input/FileInput';

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
            <FileInput onSelect={handleAdd} />
            <h4>Deine Leistungen</h4>
            {content && (
                <Box sx={{ width: '100%', minHeight: 400 }}>
                    <Masonry columns={{ xs: 2, sm: 3, md: 4, lg: 4 }} spacing={2}>
                        {content}
                    </Masonry>
                </Box>
            )}
        </div>
    );
};

Benefits.displayName = 'Benefits';

export default Benefits;
