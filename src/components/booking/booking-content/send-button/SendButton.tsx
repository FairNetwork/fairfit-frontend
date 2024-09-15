import './sendButton.scss';
import { Button } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import {
    selectIsButtonDisabled,
    selectSendOrderLoadingState
} from '../../../../redux/user/selectors';
import { sendSubscription } from '../../../../redux/user/actions';

const SendButton = () => {
    const dispatch = useAppDispatch();

    const isButtonDisabled = useAppSelector(selectIsButtonDisabled);
    const sendOrderLoadingState = useAppSelector(selectSendOrderLoadingState);

    const handleClick = () => {
        void dispatch(sendSubscription());
    };

    return (
        <div className="send-button">
            <Button
                variant="contained"
                disabled={isButtonDisabled || sendOrderLoadingState === 'pending'}
                onClick={handleClick}>
                Abschließen
            </Button>
        </div>
    );
};

SendButton.displayName = 'SendButton';

export default SendButton;
