import React, { useEffect, useState } from 'react';
import './header.scss';
import { Avatar } from '@mui/material';
import { Popover } from 'antd';
import { useAppSelector } from '../../hooks/redux';
import { selectIsLoggedIn } from '../../redux/login/selectors';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/fairfit_logo.png';
import avatar from '../../assets/avatar_placeholder.png';
import DarkModeSwitch from './dark-mode-switch/DarkModeSwitch';
import { DARK_MODE_STORAGE_KEY } from '../../constants/storage';

const Header = () => {
    const isLoggedIn = useAppSelector(selectIsLoggedIn);

    const [isChecked, setIsChecked] = useState<boolean>(true);

    useEffect(() => {
        const storedValue = localStorage.getItem(DARK_MODE_STORAGE_KEY);

        if (storedValue !== null) {
            setIsChecked(JSON.parse(storedValue));
        }
    }, []);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.checked;

        setIsChecked(newValue);

        localStorage.setItem(DARK_MODE_STORAGE_KEY, JSON.stringify(newValue));

        const newEvent = new StorageEvent('storage', {
            key: DARK_MODE_STORAGE_KEY,
            oldValue: newValue ? 'false' : 'true',
            newValue: JSON.stringify(newValue)
        });

        window.dispatchEvent(newEvent);
    };

    const navigate = useNavigate();

    const handleLogout = () => {};

    const content = (
        <div className="header__popover">
            {!isLoggedIn && (
                <div className="header__popover__item" onClick={() => navigate('log-in')}>
                    Anmelden
                </div>
            )}
            {!isLoggedIn && (
                <div className="header__popover__item" onClick={() => navigate('register-studio')}>
                    Registrieren
                </div>
            )}
            {isLoggedIn && (
                <div className="header__popover__item__logout" onClick={handleLogout}>
                    Abmelden
                </div>
            )}
        </div>
    );

    return (
        <div className="header">
            <div className="header__logo" onClick={() => navigate('/')}>
                <img src={logo} alt="logo" />
                <p>FairFit</p>
            </div>
            <div className="header__left">
                <DarkModeSwitch checked={isChecked} onChange={handleChange} />
                <div className="header__left__profile">
                    <Popover trigger="click" content={content}>
                        <Avatar src={avatar} style={{ height: 30, width: 30, cursor: 'pointer' }} />
                    </Popover>
                </div>
            </div>
        </div>
    );
};

Header.displayName = 'Header';

export default Header;
