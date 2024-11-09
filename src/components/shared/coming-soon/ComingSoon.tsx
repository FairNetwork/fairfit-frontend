import React from 'react';
import './comingSoon.scss';
import Icon from '../icon/Icon';

const ComingSoon = () => {
    return (
        <div className="coming-soon">
            <Icon icon="bi bi-cone-striped" size={80} />
            <h2>In Arbeit</h2>
        </div>
    );
};

ComingSoon.displayName = 'ComingSoon';

export default ComingSoon;
