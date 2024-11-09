import React from 'react';
import { AppBar } from '@mui/material';
import './navigationBar.scss';
import Icon from '../icon/Icon';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../../hooks/redux';
import { selectGymName } from '../../../redux/gym/selectors';

const NavigationBar = () => {
    const gymName = useAppSelector(selectGymName);

    const navigate = useNavigate();

    return (
        <div className="navigation-bar">
            <AppBar position="static">
                <div className="navigation-bar__content">
                    <div className="navigation-bar__content__logo">
                        <h6>{gymName ?? 'FairFit'}&nbsp;</h6>
                        <p>
                            by<button>{gymName ? 'FairFit' : 'FairNet'}</button>
                        </p>
                    </div>
                    <Icon icon="bi bi-house" size={24} onClick={() => navigate('/')} />
                </div>
            </AppBar>
        </div>
    );
};

NavigationBar.displayName = 'NavigationBar';

export default NavigationBar;
