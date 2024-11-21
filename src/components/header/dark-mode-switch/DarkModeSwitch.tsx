import React from 'react';
import Switch from '@mui/material/Switch';
import './darkModeSwitch.scss';

interface DarkModeSwitchProps {
    checked: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const DarkModeSwitch: React.FC<DarkModeSwitchProps> = ({ checked, onChange }) => {
    return (
        <Switch checked={checked} onChange={onChange} className="dark-mode-switch" disableRipple />
    );
};

DarkModeSwitch.displayName = 'DarkModeSwitch';

export default DarkModeSwitch;
