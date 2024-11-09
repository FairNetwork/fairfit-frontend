import './abonnements.scss';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { selectAbonnements } from '../../../redux/gym/selectors';
import Card from '../../shared/card-slider/card/Card';
import React, { useMemo, useState, MouseEvent } from 'react';
import { Masonry } from '@mui/lab';
import {
    Box,
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    Divider,
    Menu,
    MenuItem
} from '@mui/material';
import DialogTransition from '../../shared/dialog-transition/DialogTransition';
import AbonnementDialog from '../../shared/abonnement-dialog/AbonnementDialog';
import { removeAbonnementAction } from '../../../redux/gym/actions';

const Abonnements = () => {
    const dispatch = useAppDispatch();

    const abonnements = useAppSelector(selectAbonnements);

    const [editId, setEditId] = useState<string | undefined>();
    const [shouldShowDialog, setShouldShowDialog] = useState(false);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const open = Boolean(anchorEl);

    const handleClick = (event: MouseEvent<HTMLElement>, id: string) => {
        setAnchorEl(event.currentTarget);

        setEditId(id);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setEditId(undefined);
    };

    const handleAdd = () => {
        setEditId(undefined);
        setShouldShowDialog(true);
    };

    const handleEdit = () => {
        setShouldShowDialog(true);
        setAnchorEl(null);
    };

    const handleRemove = () => {
        setAnchorEl(null);

        if (editId) {
            void dispatch(removeAbonnementAction(editId));
        }
    };

    const content = useMemo(
        () =>
            abonnements?.map(
                ({ id, details, title, price, priceAfterDuration, duration, isOffer }) => {
                    return (
                        <Card
                            onEdit={handleClick}
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
                    key={id ?? 'tmp-dialog'}
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
                <Button variant="contained" onClick={handleAdd}>
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
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button'
                }}>
                <MenuItem onClick={handleEdit}>Bearbeiten</MenuItem>
                <MenuItem onClick={handleRemove}>Löschen</MenuItem>
            </Menu>
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
