import './abonnementDialog.scss';
import {
    Alert,
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    TextField,
    IconButton,
    Box,
    Divider
} from '@mui/material';
import { ChangeEvent, useMemo, useState, useEffect } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { useAppDispatch } from '../../../hooks/redux';
import { Offer } from '../../../types/offer';
import Icon from '../icon/Icon';

interface AbonnementDialogProps {
    id?: Offer['id'];
    isOffer?: Offer['isOffer'];
    title?: Offer['title'];
    details?: Offer['details'];
    price?: Offer['price'];
    duration?: Offer['duration'];
    priceAfterDuration?: Offer['priceAfterDuration'];
}

const AbonnementDialog = ({
    id,
    details = [],
    title,
    price,
    priceAfterDuration,
    duration,
    isOffer
}: AbonnementDialogProps) => {
    const dispatch = useAppDispatch();

    const shouldUpdate = typeof id === 'string';

    const [tmpTitle, setTmpTitle] = useState(title ?? '');
    const [tmpPrice, setTmpPrice] = useState(price ?? 0);
    const [tmpPriceAfterDuration, setTmpPriceAfterDuration] = useState(priceAfterDuration ?? 0);
    const [tmpDuration, setTmpDuration] = useState(duration ?? 0);
    const [tmpIsOffer, setTmpIsOffer] = useState(isOffer);
    const [tmpDetails, setTmpDetails] = useState<string[]>([...details, '']);

    const isButtonDisabled = useMemo(() => {
        return false;
    }, []);

    const handleClick = () => {};

    const handleCheckboxClick = (event: ChangeEvent<HTMLInputElement>) => {
        setTmpIsOffer(event.target.checked);
    };

    const addDetailField = () => {
        setTmpDetails((prevDetails) => [...prevDetails, '']);
    };

    const removeDetailField = (index: number) => {
        setTmpDetails((prevDetails) => prevDetails.filter((_, i) => i !== index));
    };

    const handleDetailChange = (index: number, value: string) => {
        const updatedDetails = [...tmpDetails];
        updatedDetails[index] = value;
        setTmpDetails(updatedDetails);

        if (index === tmpDetails.length - 1 && value) {
            addDetailField();
        }
    };

    const handleDetailBlur = (index: number, value: string) => {
        if (value === '' && index !== tmpDetails.length - 1) {
            removeDetailField(index);
        }
    };

    const detailsContent = useMemo(() => {
        return tmpDetails.map((detail, index) => (
            <Box key={index} display="flex" alignItems="center" marginBottom={2}>
                <FormControl fullWidth variant="outlined">
                    <InputLabel
                        htmlFor={`social-media-input${index}`}>{`${index + 1}. Detail`}</InputLabel>
                    <OutlinedInput
                        value={detail}
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
                <div>
                    <FormControlLabel
                        control={<Checkbox checked={tmpIsOffer} onChange={handleCheckboxClick} />}
                        label="Angebot"
                    />
                </div>
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
