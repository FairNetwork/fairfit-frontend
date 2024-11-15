import React, { FC } from 'react';
import './leftItem.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import Icon from '../../shared/icon/Icon';
import { useAppSelector } from '../../../hooks/redux';
import { selectCurrentGymId } from '../../../redux/gym/selectors';

interface LeftItemProps {
    icon?: string;
    route: string;
    text: string;
    children?: {
        icon?: string;
        route: string;
        text: string;
    }[];
}

const LeftItem: FC<LeftItemProps> = ({ icon, children, route, text }) => {
    const gymId = useAppSelector(selectCurrentGymId);

    const location = useLocation();
    const navigate = useNavigate();

    const handleClick = (path: string) => navigate(path.replace(':gym', gymId ?? ''));

    return (
        <>
            <div
                className={`left-item ${location.pathname === (gymId ? route.replace(gymId, ':gym') : route) ? 'left-item--active' : ''}`}
                onClick={() => handleClick(route)}>
                {icon && (
                    <div className="left-item__icon">
                        <Icon color="white" icon={icon} size={21} onClick={() => {}} />
                    </div>
                )}
                <div
                    className="left-item__text ellipsis"
                    style={{ marginLeft: icon ? undefined : '10px' }}>
                    {text}
                </div>
            </div>
            {children &&
                children.map(({ text, icon, route: childrenRoute }) => (
                    <div
                        className={`left-item ${location.pathname === (gymId ? childrenRoute.replace(gymId, ':gym') : childrenRoute) ? 'left-item--active' : ''} left-item__children`}
                        onClick={() => handleClick(childrenRoute)}>
                        {icon && (
                            <div className="left-item__icon">
                                <Icon color="white" icon={icon} size={21} onClick={() => {}} />
                            </div>
                        )}
                        <div
                            className="left-item__text ellipsis"
                            style={{ marginLeft: icon ? undefined : '10px' }}>
                            {text}
                        </div>
                    </div>
                ))}
        </>
    );
};

LeftItem.displayName = 'LeftItem';

export default LeftItem;
