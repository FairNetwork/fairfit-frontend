import React, { FC } from 'react';
import './leftItem.scss';
import clsx from 'clsx';
import { useLocation, useNavigate } from 'react-router-dom';
import Icon from '../../shared/icon/Icon';

interface LeftItemProps {
    icon?: string;
    route: string;
    text: string;
}

const LeftItem: FC<LeftItemProps> = ({ icon, route, text }) => {
    const location = useLocation();
    const navigate = useNavigate();

    const isActive = route === location.pathname;

    const handleClick = () => navigate(route);

    const classes = clsx('left-item', {
        'left-item--active': isActive
    });

    return (
        <div className={classes} onClick={handleClick}>
            {icon && (
                <div className="left-item__icon">
                    <Icon color="white" icon={icon} size={21} style={{ cursor: 'pointer' }} />
                </div>
            )}
            <div className="left-item__text ellipsis">{text}</div>
        </div>
    );
};

LeftItem.displayName = 'LeftItem';

export default LeftItem;
