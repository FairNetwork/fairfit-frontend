import React from 'react';
import { useAppSelector } from '../../hooks/redux';
import { selectLoadedGyms } from '../../redux/gym/selectors';
import LeftItem from './left-item/LeftItem';
import './leftWrapper.scss';
import { UTILS } from '../../constants/footer';

const LeftWrapper = () => {
    const loadedGyms = useAppSelector(selectLoadedGyms);

    return (
        <div className="left-wrapper">
            <div className="left-wrapper__home">
                <LeftItem text="FairFit" route="/" icon="bi bi-house" />
            </div>
            <div className="left-wrapper__divider" />
            <div className="left-wrapper__headline">Verlauf</div>
            <div className="left-wrapper__gyms">
                {loadedGyms.map(({ name, internalId }) => (
                    <LeftItem route={`/${internalId}`} text={name} icon="bi bi-archive" />
                ))}
            </div>
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
