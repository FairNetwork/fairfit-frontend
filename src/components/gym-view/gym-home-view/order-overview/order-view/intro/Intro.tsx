import './intro.scss';
import { useAppSelector } from '../../../../../../hooks/redux';
import { selectGymNameById } from '../../../../../../redux/gym/selectors';
import { useCallback, useContext } from 'react';
import { GymContext } from '../../../../../App';
import { RootState } from '../../../../../../redux/store';

const Intro = () => {
    const { gymId } = useContext(GymContext);

    const nameSelector = useCallback(
        (state: RootState) => selectGymNameById(state, gymId),
        [gymId]
    );

    const gymName = useAppSelector(nameSelector);

    return <div className="intro">{gymName}</div>;
};

Intro.displayName = 'Intro';

export default Intro;
