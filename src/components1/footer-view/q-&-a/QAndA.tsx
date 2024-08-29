import './qAndA.scss';
import { IGym } from '../../../types/gym';

interface QAndAProps {
    gymId?: IGym['internalId'];
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
