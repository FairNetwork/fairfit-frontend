import React from 'react';
import './header.scss';
import { Avatar } from '@mui/material';
import { Popover } from 'antd';
import { useAppSelector } from '../../hooks/redux';
import { selectIsLoggedIn } from '../../redux/login/selectors';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/fairfit_logo.png';

const Header = () => {
    const isLoggedIn = useAppSelector(selectIsLoggedIn);

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
            <div className="header__profile">
                <Popover trigger="click" content={content}>
                    <Avatar
                        src="/broken-image.jpg"
                        style={{ height: 30, width: 30, cursor: 'pointer' }}
                    />
                </Popover>
            </div>
        </div>
    );
};

Header.displayName = 'Header';

export default Header;
