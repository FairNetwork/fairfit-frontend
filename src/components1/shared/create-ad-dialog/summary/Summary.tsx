import './summary.scss';
import { ChangeEvent, useCallback, useContext, useEffect, useState } from 'react';
import { Button, TextField } from '@mui/material';
import { GymContext } from '../../../App';
import { RootState } from '../../../../redux/store';
import { selectGymNameById } from '../../../../redux/gym/selectors';
import { useAppSelector } from '../../../../hooks/redux';

interface SummaryProps {
    onClick: () => void;
}

const Summary = ({ onClick }: SummaryProps) => {
    const { gymInternalId } = useContext(GymContext);

    const nameSelector = useCallback(
        (state: RootState) => selectGymNameById(state, gymInternalId),
        [gymInternalId]
    );

    const gymName = useAppSelector(nameSelector);

    const [owner, setOwner] = useState('');
    const [payer, setPayer] = useState('');

    useEffect(() => {
        if (gymName) {
            if (owner.length === 0) {
                setOwner(gymName);
            }

            if (payer.length === 0) {
                setPayer(gymName);
            }
        }
    }, [gymName, owner.length, payer.length]);

    const handleOwnerChange = (event: ChangeEvent<HTMLInputElement>) => {
        setOwner(event.target.value);
    };

    const handlePayerChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPayer(event.target.value);
    };

    const handleButtonClick = () => {
        onClick();
    };

    return (
        <div className="dialog-summary">
            <div className="dialog-summary__description">
                Wenn Du eine neue Werbeanzeige erstellst, die in der EU gezeigt wird, musst Du die
                Person oder Organisation angeben, die von der Anzeige profitiert, und die Person
                oder Organisation, die die Anzeige finanziert. Diese informationen sind ein Jahr
                lang in der Werbebibliothek verfügbar, nicht jedoch in der Anzeige selbst.
            </div>
            <div className="dialog-summary__card">
                <TextField
                    id="owner"
                    label="Wem kommt diese Werbeanzeige zugute?"
                    variant="outlined"
                    value={owner}
                    onChange={handleOwnerChange}
                    style={{ width: '100%' }}
                />
                <TextField
                    id="payer"
                    label="Wer finaziert diese Werbeanzeige?"
                    variant="outlined"
                    value={payer}
                    onChange={handlePayerChange}
                    style={{ width: '100%' }}
                />
            </div>
            <Button variant="contained" onClick={handleButtonClick}>
                Bestätigen
            </Button>
        </div>
    );
};

Summary.displayName = 'Summary';

export default Summary;
