import './abonnementDialog.scss';
import {
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    TextField,
    Box
} from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import { ChangeEvent, useMemo, useState, useCallback } from 'react';
import { useAppDispatch } from '../../../hooks/redux';
import { Offer } from '../../../types/offer';
import Icon from '../icon/Icon';
import { postAbonnementAction, updateAbonnementAction } from '../../../redux/gym/actions';

interface AbonnementDialogProps {
    id?: Offer['id'];
    isOffer?: Offer['isOffer'];
    title?: Offer['title'];
    details?: Offer['details'];
    price?: Offer['price'];
    duration?: Offer['duration'];
    priceAfterDuration?: Offer['priceAfterDuration'];
    onSave: VoidFunction;
}

const AbonnementDialog = ({
    id,
    details = [],
    title,
    price,
    priceAfterDuration,
    duration,
    isOffer,
    onSave
}: AbonnementDialogProps) => {
    const dispatch = useAppDispatch();

    const shouldUpdate = typeof id === 'string';

    const [tmpTitle, setTmpTitle] = useState(title ?? '');
    const [tmpPrice, setTmpPrice] = useState(price ?? 0);
    const [tmpPriceAfterDuration, setTmpPriceAfterDuration] = useState(priceAfterDuration ?? 0);
    const [tmpDuration, setTmpDuration] = useState(duration ?? 0);
    const [tmpIsOffer, setTmpIsOffer] = useState(isOffer ?? false);
    const [tmpDetails, setTmpDetails] = useState<Offer['details']>([
        ...details,
        { id: `tmp-${uuidv4()}`, detail: '' }
    ]);

    const isButtonDisabled = useMemo(() => {
        if (!shouldUpdate) {
            return tmpTitle.trim().length === 0 || tmpPrice === 0;
        }

        const hasChanges =
            tmpTitle !== title ||
            tmpPrice !== price ||
            tmpPriceAfterDuration !== priceAfterDuration ||
            tmpDuration !== duration ||
            tmpIsOffer !== isOffer ||
            JSON.stringify(tmpDetails) !== JSON.stringify(details);

        return !hasChanges;
    }, [
        shouldUpdate,
        tmpTitle,
        tmpPrice,
        tmpPriceAfterDuration,
        tmpDuration,
        tmpIsOffer,
        tmpDetails,
        title,
        price,
        priceAfterDuration,
        duration,
        isOffer,
        details
    ]);

    const handleClick = () => {
        const entry = {
            id,
            duration: tmpIsOffer ? tmpDuration : null,
            isOffer: tmpIsOffer,
            details: tmpDetails,
            price: tmpPrice,
            priceAfterDuration: tmpIsOffer ? tmpPriceAfterDuration : null,
            title: tmpTitle
        };

        if (shouldUpdate) {
            void dispatch(updateAbonnementAction(entry));
        } else {
            void dispatch(postAbonnementAction(entry));
        }

        onSave();
    };

    const handleCheckboxClick = (event: ChangeEvent<HTMLInputElement>) => {
        setTmpIsOffer(event.target.checked);

        if (!event.target.checked) {
            setTmpDuration(0);
            setTmpPriceAfterDuration(0);
        }
    };

    const addDetailField = () => {
        setTmpDetails((prevDetails) => [...prevDetails, { id: `tmp-${uuidv4()}`, detail: '' }]);
    };

    const removeDetailField = (index: number) => {
        setTmpDetails((prevDetails) => prevDetails.filter((_, i) => i !== index));
    };

    const handleDetailChange = useCallback(
        (index: number, value: string) => {
            const updatedDetails = [...tmpDetails];
            updatedDetails[index].detail = value;
            setTmpDetails(updatedDetails);

            if (index === tmpDetails.length - 1 && value) {
                addDetailField();
            }
        },
        [tmpDetails]
    );

    const handleDetailBlur = useCallback(
        (index: number, value: string) => {
            if (value === '' && index !== tmpDetails.length - 1) {
                removeDetailField(index);
            }
        },
        [tmpDetails.length]
    );

    const detailsContent = useMemo(() => {
        return tmpDetails.map((detail, index) => (
            <Box key={index} display="flex" alignItems="center" marginBottom={2}>
                <FormControl fullWidth variant="outlined">
                    <InputLabel
                        htmlFor={`social-media-input${index}`}>{`${index + 1}. Detail`}</InputLabel>
                    <OutlinedInput
                        value={detail.detail}
                        onChange={(e) => handleDetailChange(index, e.target.value)}
                        onBlur={(e) => handleDetailBlur(index, e.target.value)}
                        id={`social-media-input${index}`}
                        endAdornment={
                            index !== tmpDetails.length - 1 && (
                                <InputAdornment position="end">
                                    <Icon
                                        icon={'bi bi-x-lg'}
                                        onClick={() => removeDetailField(index)}
                                    />
                                </InputAdornment>
                            )
                        }
                        label={`${index + 1}. Detail`}
                    />
                </FormControl>
            </Box>
        ));
    }, [handleDetailBlur, handleDetailChange, tmpDetails]);

    return (
        <div className="abonnement-dialog">
            <div className="abonnement-dialog__content">
                <div className="abonnement-dialog__content__row">
                    <TextField
                        id="title"
                        label="Titel"
                        variant="outlined"
                        value={tmpTitle}
                        style={{ width: '70%' }}
                        onChange={(event: ChangeEvent<HTMLInputElement>) =>
                            setTmpTitle(event.target.value)
                        }
                    />
                    <FormControl style={{ width: '30%' }}>
                        <InputLabel htmlFor="outlined-adornment-price">Preis</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-price"
                            endAdornment={<InputAdornment position="start">€</InputAdornment>}
                            label="Preis"
                            type="number"
                            value={tmpPrice}
                            onChange={(event: ChangeEvent<HTMLInputElement>) =>
                                setTmpPrice(Number(event.target.value))
                            }
                        />
                    </FormControl>
                </div>
                <div>
                    <FormControlLabel
                        control={<Checkbox checked={tmpIsOffer} onChange={handleCheckboxClick} />}
                        label="Angebot"
                    />
                </div>
                {tmpIsOffer && (
                    <div className="abonnement-dialog__content__row">
                        <TextField
                            id="duration"
                            label="Laufzeit"
                            variant="outlined"
                            value={tmpDuration}
                            type="number"
                            style={{ width: '100%' }}
                            onChange={(event: ChangeEvent<HTMLInputElement>) =>
                                setTmpDuration(Number(event.target.value))
                            }
                        />
                        <FormControl fullWidth>
                            <InputLabel htmlFor="outlined-adornment-priceAfterDuration">
                                Preis nach Laufzeit
                            </InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-priceAfterDuration"
                                endAdornment={<InputAdornment position="start">€</InputAdornment>}
                                label="Preis nach Laufzeit"
                                type="number"
                                value={tmpPriceAfterDuration}
                                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                                    setTmpPriceAfterDuration(Number(event.target.value))
                                }
                            />
                        </FormControl>
                    </div>
                )}
                <h3>Details:</h3>
                <div>{detailsContent}</div>
            </div>
            <div className="abonnement-dialog__button">
                <Button variant="contained" disabled={isButtonDisabled} onClick={handleClick}>
                    Speichern
                </Button>
            </div>
        </div>
    );
};

AbonnementDialog.displayName = 'AbonnementDialog';

export default AbonnementDialog;
