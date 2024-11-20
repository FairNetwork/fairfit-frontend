import React, { FC, useMemo } from 'react';
import './leftItem.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import Icon from '../../shared/icon/Icon';
import { useAppSelector } from '../../../hooks/redux';
import { selectCurrentGymId } from '../../../redux/gym/selectors';
import { selectLoggedInGym } from '../../../redux/login/selectors';
import { motion } from 'framer-motion';

interface LeftItemProps {
    icon?: string;
    route: string;
    text: string;
}

const LeftItem: FC<LeftItemProps> = ({ icon, route, text }) => {
    const gymId = useAppSelector(selectCurrentGymId);
    const loggedInGymId = useAppSelector(selectLoggedInGym);

    const location = useLocation();
    const navigate = useNavigate();

    const isDashboardRoute = route.startsWith('/&gym/dashboard');

    const handleClick = (path: string) =>
        navigate(path.replace('&gym', (isDashboardRoute ? loggedInGymId : gymId) ?? ''));

    const isActive = useMemo(() => {
        return (
            location.pathname ===
            route.replace('&gym', (isDashboardRoute ? loggedInGymId : gymId) ?? '')
        );
    }, [gymId, isDashboardRoute, location.pathname, loggedInGymId, route]);

    return (
        <motion.div
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            layout="position"
            className={`left-item ${isActive ? 'left-item--active' : ''}`}
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
        </motion.div>
    );
};

LeftItem.displayName = 'LeftItem';

export default LeftItem;
