import './abonnements.scss';
import { useAppSelector } from '../../../hooks/redux';
import { selectAbonnements } from '../../../redux/gym/selectors';
import { Offer } from '../../../types/offer';
import Card from '../../shared/card-slider/card/Card';
import React, { useEffect, useMemo, useState } from 'react';
import { Masonry } from '@mui/lab';
import { Box, Button, Dialog, DialogContent, DialogTitle, Divider } from '@mui/material';
import DialogTransition from '../../shared/dialog-transition/DialogTransition';
import AbonnementDialog from '../../shared/abonnement-dialog/AbonnementDialog';

const Abonnements = () => {
    const abonnements = useAppSelector(selectAbonnements);

    const [editId, setEditId] = useState<string | undefined>();
    const [shouldShowDialog, setShouldShowDialog] = useState(false);

    // const handleAdd = () => {};

    const handleEdit = (id: Offer['id']) => {
        setEditId(id);
        setShouldShowDialog(true);
    };

    useEffect(() => {}, []);

    const content = useMemo(
        () =>
            abonnements?.map(
                ({ id, details, title, price, priceAfterDuration, duration, isOffer }) => {
                    return (
                        <Card
                            onEdit={handleEdit}
                            isSelected={false}
                            key={id}
                            id={id}
                            title={title}
                            details={details}
                            price={price}
                            isOffer={isOffer}
                            priceAfterDuration={priceAfterDuration}
                            duration={duration}
                        />
                    );
                }
            ),
        [abonnements]
    );

    const dialogTitle = useMemo(() => {
        return editId ? (
            <DialogTitle>Passe die Mitgliedschaft an.</DialogTitle>
        ) : (
            <DialogTitle>Erstelle eine neue Mitgliedschaft</DialogTitle>
        );
    }, [editId]);

    const dialogContent = useMemo(() => {
        const abonnement = abonnements?.find(({ id }) => id === editId);

        const { id, details, price, priceAfterDuration, duration, isOffer, title } =
            abonnement ?? {};

        return (
            <DialogContent>
                <AbonnementDialog
                    onSave={() => setShouldShowDialog(false)}
                    id={id}
                    title={title}
                    details={details}
                    duration={duration}
                    priceAfterDuration={priceAfterDuration}
                    price={price}
                    isOffer={isOffer}
                />
            </DialogContent>
        );
    }, [abonnements, editId]);

    return (
        <div className="abonnements">
            <i>
                Stelle verschiedene Mitgliedschaftsoptionen vor. Füge Beschreibungen und Preise
                hinzu, um deinen Kunden die Wahl zu erleichtern.
            </i>
            <div className="abonnements__button">
                <Button variant="contained" onClick={() => setShouldShowDialog(true)}>
                    Abonnement erstellen
                </Button>
            </div>
            <Divider variant="middle" />
            {content && (
                <Box sx={{ width: '100%', minHeight: 400 }}>
                    <Masonry columns={{ xs: 2, sm: 3, md: 4, lg: 4 }} spacing={2}>
                        {content}
                    </Masonry>
                </Box>
            )}
            <Dialog
                open={shouldShowDialog}
                keepMounted
                TransitionComponent={DialogTransition}
                onClose={() => {
                    setEditId(undefined);
                    setShouldShowDialog(false);
                }}
                aria-describedby="alert-dialog-slide-description">
                {dialogTitle}
                {dialogContent}
            </Dialog>
        </div>
    );
};

Abonnements.displayName = 'Abonnements';

export default Abonnements;
