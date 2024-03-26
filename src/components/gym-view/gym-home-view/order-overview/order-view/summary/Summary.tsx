import {
    Button,
    CircularProgress,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControlLabel,
    Radio,
    Slide,
    Tooltip
} from '@mui/material';
import Accordion from '../../../../../shared/accordion/Accordion';
import './summary.scss';
import { useAppDispatch, useAppSelector } from '../../../../../../hooks/redux';
import {
    selectSelectedOfferId,
    selectSendOrderLoadingState,
    selectUser
} from '../../../../../../redux/user/selectors';
import Card from '../../../../../shared/card/Card';
import { selectAgbsById, selectGymById } from '../../../../../../redux/gym/selectors';
import { setAreAgbsAccepted, setSendOrderLoadingState } from '../../../../../../redux/user/slice';
import {
    ChangeEvent,
    forwardRef,
    ReactElement,
    Ref,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState
} from 'react';
import { finishOrder } from '../../../../../../redux/user/actions';
import { useLocation, useNavigate } from 'react-router-dom';
import { getGymFromRoute } from '../../../../../../utils/routes';
import { TransitionProps } from '@mui/material/transitions';
import { isMobile } from '../../../../../../utils/environment';
import { GymContext } from '../../../../../App';
import { RootState } from '../../../../../../redux/store';

const Transition = forwardRef(function Transition(
    props: TransitionProps & {
        children: ReactElement<any, any>;
    },
    ref: Ref<unknown>
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const Summary = () => {
    const dispatch = useAppDispatch();

    const { gymInternalId } = useContext(GymContext);

    const agbSelector = useCallback(
        (state: RootState) => selectAgbsById(state, gymInternalId),
        [gymInternalId]
    );
    const gymSelector = useCallback(
        (state: RootState) => selectGymById(state, gymInternalId),
        [gymInternalId]
    );

    const agbs = useAppSelector(agbSelector);
    const gym = useAppSelector(gymSelector);

    const {
        owner,
        iban,
        street,
        place,
        postcode,
        number,
        lastName,
        email,
        birthday,
        firstName,
        areAgbsAccepted
    } = useAppSelector(selectUser);
    const selectedOfferId = useAppSelector(selectSelectedOfferId);
    const sendOrderLoadingState = useAppSelector(selectSendOrderLoadingState);

    const selectedOffer = useMemo(() => {
        const combinedOffers = [...(gym?.offers ?? []), ...(gym?.abonnements ?? [])];

        return combinedOffers.find(({ id }) => id === selectedOfferId);
    }, [gym?.abonnements, gym?.offers, selectedOfferId]);

    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [isTooltipOpen, setIsTooltipOpen] = useState(false);

    const navigate = useNavigate();

    const location = useLocation();

    useEffect(() => {
        if (sendOrderLoadingState !== 'none') {
            setIsDialogOpen(true);
        }
    }, [sendOrderLoadingState]);

    const handleAgbAccept = (event: ChangeEvent<HTMLInputElement>, checked: boolean) => {
        dispatch(setAreAgbsAccepted(checked));
    };

    const handleClick = () => {
        void dispatch(finishOrder(gymInternalId));
    };

    const handleCloseDialog = useCallback(() => {
        switch (sendOrderLoadingState) {
            case 'successful':
                navigate(`/${getGymFromRoute(location.pathname)}`);
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
    }, [dispatch, location.pathname, navigate, sendOrderLoadingState]);

    const dialogTitle = useMemo(() => {
        switch (sendOrderLoadingState) {
            case 'successful':
                return <DialogTitle>Deine Bestellung wurde erfolgreich abgegeben</DialogTitle>;
            case 'rejected':
                return <DialogTitle>Deine Bestellung konnte nicht abgegeben werden</DialogTitle>;
            default:
                return null;
        }
    }, [sendOrderLoadingState]);

    const dialogContent = useMemo(() => {
        switch (sendOrderLoadingState) {
            case 'pending':
                return (
                    <DialogContent>
                        <CircularProgress />
                    </DialogContent>
                );
            default:
                return (
                    <DialogActions>
                        <Button onClick={handleCloseDialog}>OK</Button>
                    </DialogActions>
                );
        }
    }, [handleCloseDialog, sendOrderLoadingState]);

    return (
        <div className="summary">
            <Accordion id={1} isDefaultOpen title="Deine Daten">
                <div className="summary__data">
                    <div className="summary__data__address">
                        <div>
                            {firstName} {lastName}
                        </div>
                        <div>
                            {street} {number}
                        </div>
                        <div>
                            {postcode} {place}
                        </div>
                    </div>
                    <div className="summary__data__info">
                        <div>{birthday}</div>
                        <div>{email}</div>
                    </div>
                    <div className="summary__data__payment">
                        <div>Kontoinhaber: {owner}</div>
                        <div>IBAN: {iban}</div>
                    </div>
                </div>
            </Accordion>
            {selectedOffer && (
                <Accordion id={2} title="Dein Abo">
                    <Card
                        id={selectedOffer.id}
                        title={selectedOffer.title}
                        color={selectedOffer.color}
                        details={selectedOffer.details}
                        price={selectedOffer.price}
                        isOffer={selectedOffer.isOffer}
                        priceAfterDuration={selectedOffer.priceAfterDuration}
                        duration={selectedOffer.duration}
                    />
                </Accordion>
            )}
            <Accordion id={3} title="AGB's">
                <div className="summary__agbs">
                    <div>{agbs}</div>
                    <FormControlLabel
                        value="AGBs"
                        control={<Radio checked={areAgbsAccepted} onChange={handleAgbAccept} />}
                        label="Hiermit akzeptiere ich die allgemeinen Geschäftsbedingungen"
                    />
                </div>
            </Accordion>
            <div className="summary__button">
                <Tooltip
                    title="Bitte akzeptiere die AGB's"
                    open={isTooltipOpen}
                    onClose={() => setIsTooltipOpen(false)}
                    placement="top"
                    arrow>
                    <span
                        onClick={() =>
                            !areAgbsAccepted && isMobile() ? setIsTooltipOpen(true) : undefined
                        }
                        onMouseEnter={() => (!areAgbsAccepted ? setIsTooltipOpen(true) : undefined)}
                        onMouseLeave={() =>
                            !areAgbsAccepted ? setIsTooltipOpen(false) : undefined
                        }>
                        <Button
                            variant="contained"
                            disabled={!areAgbsAccepted || sendOrderLoadingState === 'pending'}
                            onClick={handleClick}>
                            Bestellen
                        </Button>
                    </span>
                </Tooltip>
            </div>
            <Dialog
                open={isDialogOpen}
                keepMounted
                TransitionComponent={Transition}
                onClose={handleCloseDialog}
                aria-describedby="alert-dialog-slide-description">
                {dialogTitle}
                {dialogContent}
            </Dialog>
        </div>
    );
};

Summary.displayName = 'Summary';

export default Summary;
