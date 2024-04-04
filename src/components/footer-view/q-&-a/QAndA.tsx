import './qAndA.scss';
import { Gym } from '../../../types/gym';

interface QAndAProps {
    gymId?: Gym['internalId'];
}

const QAndA = ({ gymId }: QAndAProps) => {
    return (
        <div className="q-and-a">
            <h3 className="q-and-a__headline">Q&A</h3>
        </div>
    );
};

QAndA.displayName = 'QAndA';

export default QAndA;
