import './upload.scss';
import {
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
    TextField,
    Tooltip
} from '@mui/material';
import { ChangeEvent, ReactElement, useCallback, useContext, useMemo, useState } from 'react';
import { GymContext } from '../../../App';
import { selectOfferNamesById } from '../../../../redux/gym/selectors';
import { RootState } from '../../../../redux/store';
import { useAppSelector } from '../../../../hooks/redux';
import { isMobile } from '../../../../utils1/environment';
import Icon from '../../icon/Icon';

interface UploadProps {
    onClick: () => void;
}

const Upload = ({ onClick }: UploadProps) => {
    const { gymInternalId } = useContext(GymContext);

    const [title, setTitle] = useState('');
    const [offerName, setOfferName] = useState('');
    const [isTooltipOpen, setIsTooltipOpen] = useState(false);

    const isButtonDisabled = useMemo(() => {
        return title.length === 0 || offerName.length === 0;
    }, [offerName.length, title.length]);

    const gymSelector = useCallback(
        (state: RootState) => selectOfferNamesById(state, gymInternalId),
        [gymInternalId]
    );

    const offerNames = useAppSelector(gymSelector);

    const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    const handleOfferChange = (event: SelectChangeEvent) => {
        setOfferName(event.target.value);
    };

    const handleButtonClick = () => {
        onClick();
    };

    const menuItems = useMemo(() => {
        const items: ReactElement[] = [];

        offerNames?.forEach((offer) => {
            items.push(
                <MenuItem key={offer} value={offer}>
                    {offer}
                </MenuItem>
            );
        });

        return items;
    }, [offerNames]);

    return (
        <div className="upload">
            <div className="upload__input">
                <Icon icon="bi-upload" size={60} />
                <div className="upload__input__text">Werbeanzeige hochladen</div>
            </div>
            <TextField
                id="title"
                label="Titel"
                variant="outlined"
                value={title}
                onChange={handleTitleChange}
                style={{ width: '100%' }}
            />
            <FormControl fullWidth>
                <InputLabel id="offer-select-label">Angebot</InputLabel>
                <Select
                    labelId="offer-select-label"
                    id="offer-select"
                    value={offerName}
                    label="Angebot"
                    onChange={handleOfferChange}>
                    {menuItems}
                </Select>
            </FormControl>
            <Tooltip
                title="Bitte gebe ein Bild / Video, Titel und Angebot an"
                open={isTooltipOpen}
                onClose={() => setIsTooltipOpen(false)}
                placement="top"
                arrow>
                <span
                    onClick={() =>
                        isButtonDisabled && isMobile() ? setIsTooltipOpen(true) : undefined
                    }
                    onMouseEnter={() => (isButtonDisabled ? setIsTooltipOpen(true) : undefined)}
                    onMouseLeave={() => (isButtonDisabled ? setIsTooltipOpen(false) : undefined)}>
                    <Button
                        variant="contained"
                        disabled={isButtonDisabled}
                        onClick={handleButtonClick}>
                        Weiter
                    </Button>
                </span>
            </Tooltip>
        </div>
    );
};

Upload.displayName = 'Upload';

export default Upload;
