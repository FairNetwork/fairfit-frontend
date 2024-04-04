import './impressum.scss';
import { Gym } from '../../../types/gym';

interface ImpressumProps {
    gymId?: Gym['internalId'];
}

const Impressum = ({ gymId }: ImpressumProps) => {
    return (
        <div className="impressum">
            <h3 className="impressum__headline">Impressum</h3>
        </div>
    );
};

Impressum.displayName = 'Impressum';

export default Impressum;
