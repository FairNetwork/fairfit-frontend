import React from 'react';
import { useAppSelector } from '../../hooks/redux';
import { selectCurrentGymId, selectLoadedGyms } from '../../redux/gym/selectors';
import LeftItem from './left-item/LeftItem';
import './leftWrapper.scss';
import { UTILS } from '../../constants/footer';
import { DASHBOARD } from '../../constants/dashboard';
import { selectIsLoggedIn } from '../../redux/login/selectors';

const LeftWrapper = () => {
    const loadedGyms = useAppSelector(selectLoadedGyms);
    const gymId = useAppSelector(selectCurrentGymId);
    const isLoggedIn = useAppSelector(selectIsLoggedIn);

    return (
        <div className="left-wrapper">
            <div className="left-wrapper__home">
                <LeftItem text="FairFit" route="/" icon="bi bi-house" />
            </div>
            <div className="left-wrapper__divider" />
            <div className="left-wrapper__headline ellipsis">Verlauf</div>
            <div className="left-wrapper__gyms">
                {loadedGyms.map(({ name, internalId }) => (
                    <LeftItem route={`/${internalId}`} text={name} />
                ))}
            </div>
            {isLoggedIn && (
                <>
                    <div className="left-wrapper__divider" />
                    <div className="left-wrapper__dashboard">
                        {DASHBOARD.map(({ text, icon, route, children }) => (
                            <LeftItem
                                route={route.replace(':gym', gymId ?? '')}
                                text={text}
                                icon={icon}
                                children={children}
                            />
                        ))}
                    </div>
                </>
            )}
            <div className="left-wrapper__divider" />
            <div className="left-wrapper__utils">
                {UTILS.map(({ text, icon, route }) => (
                    <LeftItem route={route} text={text} icon={icon} />
                ))}
            </div>
        </div>
    );
};

LeftWrapper.displayName = 'LeftWrapper';

export default LeftWrapper;
