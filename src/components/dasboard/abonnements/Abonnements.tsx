import './abonnements.scss';
import { useAppSelector } from '../../../hooks/redux';
import { selectAbonnements } from '../../../redux/gym/selectors';
import { Offer } from '../../../types/offer';
import Card from '../../shared/card-slider/card/Card';
import React, { useEffect, useMemo, useState } from 'react';
import { Masonry } from '@mui/lab';
import { Box, CircularProgress, Dialog, DialogContent, DialogTitle } from '@mui/material';
import DialogTransition from '../../shared/dialog-transition/DialogTransition';
import AbonnementDialog from '../../shared/abonnement-dialog/AbonnementDialog';

const Abonnements = () => {
    const abonnements = useAppSelector(selectAbonnements);

    const [editId, setEditId] = useState<string | undefined>();

    // const handleAdd = () => {};

    const handleEdit = (id: Offer['id']) => {
        setEditId(id);
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

    // const dialogTitle = useMemo(() => {
    //     switch (sendOrderLoadingState) {
    //         case 'successful':
    //             return <DialogTitle>Deine Daten wurden an {gymName} weitergeleitet</DialogTitle>;
    //         case 'rejected':
    //             return (
    //                 <DialogTitle>
    //                     Deine Daten konnten nicht an {gymName} weitergeleitet werden
    //                 </DialogTitle>
    //             );
    //         default:
    //             return null;
    //     }
    // }, [gymName, sendOrderLoadingState]);

    const dialogContent = useMemo(() => {
        if (typeof editId === 'string') {
            const abonnement = abonnements?.find(({ id }) => id === editId);

            if (abonnement) {
                const { id, details, price, priceAfterDuration, duration, isOffer, title } =
                    abonnement;

                return (
                    <DialogContent>
                        <AbonnementDialog
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
            }
        }
    }, [abonnements, editId]);

    return (
        <div className="abonnements">
            <i>
                Stelle verschiedene Mitgliedschaftsoptionen vor. Füge Beschreibungen und Preise
                hinzu, um deinen Kunden die Wahl zu erleichtern.
            </i>
            {content && (
                <Box sx={{ width: '100%', minHeight: 400 }}>
                    <Masonry columns={{ xs: 2, sm: 3, md: 4, lg: 4 }} spacing={2}>
                        {content}
                    </Masonry>
                </Box>
            )}
            <Dialog
                open={typeof editId === 'string'}
                keepMounted
                TransitionComponent={DialogTransition}
                onClose={() => setEditId(undefined)}
                aria-describedby="alert-dialog-slide-description">
                {/*{dialogTitle}*/}
                {dialogContent}
            </Dialog>
        </div>
    );
};

Abonnements.displayName = 'Abonnements';

export default Abonnements;
