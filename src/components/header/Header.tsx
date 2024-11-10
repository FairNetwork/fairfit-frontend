import React from 'react';
import './header.scss';
import { Avatar } from '@mui/material';

const Header = () => {
    return (
        <div className="header">
            <div className="header__logo">LoGo</div>
            <div className="header__profile">
                <Avatar src="/broken-image.jpg" style={{ height: 30, width: 30 }} />
            </div>
        </div>
    );
};

Header.displayName = 'Header';

export default Header;
