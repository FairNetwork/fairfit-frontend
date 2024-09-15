import './sendButton.scss';
import { Button, CircularProgress, Dialog, DialogContent, DialogTitle } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import {
    selectIsButtonDisabled,
    selectSendOrderLoadingState
} from '../../../../redux/user/selectors';
import { sendSubscription } from '../../../../redux/user/actions';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { setSendOrderLoadingState } from '../../../../redux/user/slice';
import { selectCurrentGymId, selectGymName } from '../../../../redux/gym/selectors';
import { useNavigate } from 'react-router-dom';
import DialogTransition from '../../../shared/dialog-transition/DialogTransition';

const SendButton = () => {
    const dispatch = useAppDispatch();

    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const isButtonDisabled = useAppSelector(selectIsButtonDisabled);
    const sendOrderLoadingState = useAppSelector(selectSendOrderLoadingState);
    const currentGymId = useAppSelector(selectCurrentGymId);
    const gymName = useAppSelector(selectGymName);

    const navigate = useNavigate();

    useEffect(() => {
        if (sendOrderLoadingState !== 'none') {
            setIsDialogOpen(true);
        }
    }, [sendOrderLoadingState]);

    const handleClick = () => {
        void dispatch(sendSubscription());
    };

    const handleCloseDialog = useCallback(() => {
        switch (sendOrderLoadingState) {
            case 'successful':
                navigate(`/${currentGymId}`);
                dispatch(setSendOrderLoadingState('none'));

                break;
            case 'pending':
                setIsDialogOpen(false);
                break;
            case 'rejected':
                setIsDialogOpen(false);
                dispatch(setSendOrderLoadingState('none'));

                break;
            default:
                break;
        }
    }, [currentGymId, dispatch, navigate, sendOrderLoadingState]);

    const dialogTitle = useMemo(() => {
        switch (sendOrderLoadingState) {
            case 'successful':
                return <DialogTitle>Deine Daten wurden an {gymName} weitergeleitet</DialogTitle>;
            case 'rejected':
                return (
                    <DialogTitle>
                        Deine Daten konnten nicht an {gymName} weitergeleitet werden
                    </DialogTitle>
                );
            default:
                return null;
        }
    }, [gymName, sendOrderLoadingState]);

    const dialogContent = useMemo(() => {
        if (sendOrderLoadingState === 'pending') {
            return (
                <DialogContent>
                    <CircularProgress />
                </DialogContent>
            );
        }
    }, [sendOrderLoadingState]);

    return (
        <div className="send-button">
            <i>
                Deine Anfrage wird direkt an {gymName} weitergeleitet. Die hier angegebenen Daten
                werden nicht gespeichert.
            </i>
            <div className="send-button__button">
                <Button
                    variant="contained"
                    disabled={isButtonDisabled || sendOrderLoadingState === 'pending'}
                    onClick={handleClick}>
                    Abschließen
                </Button>
            </div>
            <Dialog
                open={isDialogOpen}
                keepMounted
                TransitionComponent={DialogTransition}
                onClose={handleCloseDialog}
                aria-describedby="alert-dialog-slide-description">
                {dialogTitle}
                {dialogContent}
            </Dialog>
        </div>
    );
};

SendButton.displayName = 'SendButton';

export default SendButton;
