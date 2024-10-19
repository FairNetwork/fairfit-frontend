import './socialMediaInput.scss';
import { FormControl, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import Icon from '../../../../../shared/icon/Icon';
import { ChangeEvent } from 'react';

interface SocialMediaInputProps {
    onChange: (value: string) => void;
    icon: string;
    label: string;
    value: string;
}

const SocialMediaInput = ({ onChange, label, icon, value }: SocialMediaInputProps) => {
    return (
        <div className="social-media-input">
            <Icon icon={icon} size={35} />
            <FormControl sx={{ m: 1 }} fullWidth variant="outlined">
                <InputLabel htmlFor={`social-media-input${label}`}>{label}</InputLabel>
                <OutlinedInput
                    value={value}
                    onChange={(event: ChangeEvent<HTMLInputElement>) =>
                        onChange(event.target.value)
                    }
                    id={`social-media-input${label}`}
                    endAdornment={
                        <InputAdornment position="end">
                            <Icon icon={'bi bi-x-lg'} onClick={() => onChange('')} />
                        </InputAdornment>
                    }
                    label={label}
                />
            </FormControl>
        </div>
    );
};

SocialMediaInput.displayName = 'SocialMediaInput';

export default SocialMediaInput;
