import './budget.scss';
import { Button, Radio, Slider } from '@mui/material';
import { useState } from 'react';

const MONEY_MARKS = [
    {
        value: 1,
        label: '1'
    },
    {
        value: 5,
        label: '5'
    },
    {
        value: 10,
        label: '10'
    },
    {
        value: 15,
        label: '15'
    },
    {
        value: 20,
        label: '20'
    },
    {
        value: 30,
        label: '30'
    },
    {
        value: 40,
        label: '40'
    }
];

const DAY_MARKS = [
    {
        value: 1,
        label: '1'
    },
    {
        value: 5,
        label: '5'
    },
    {
        value: 10,
        label: '10'
    },
    {
        value: 15,
        label: '15'
    }
];

interface BudgetProps {
    onClick: () => void;
}

const Budget = ({ onClick }: BudgetProps) => {
    const [money, setMoney] = useState(1);
    const [days, setDays] = useState(1);
    const [isInfinity, setIsInfinity] = useState(true);

    const handleMoneyChange = (event: Event, newValue: number | number[]) => {
        setMoney(newValue as number);
    };

    const handleDayChange = (event: Event, newValue: number | number[]) => {
        setDays(newValue as number);
    };

    const handleRadioClick = () => {
        setIsInfinity((prevState) => !prevState);
    };

    const handleButtonClick = () => {
        onClick();
    };

    return (
        <div className="budget">
            <div className="budget__card">
                <div className="budget__card__head">
                    <div className="budget__card__head__text">Tagesbudget</div>
                </div>
                <div className="budget__card__content">
                    <div className="budget__card__content__money">
                        <Slider
                            value={money}
                            marks={MONEY_MARKS}
                            max={50}
                            onChange={handleMoneyChange}
                            valueLabelDisplay="auto"
                        />
                    </div>
                </div>
            </div>
            <div className="budget__card">
                <div className="budget__card__head">
                    <div className="budget__card__head__text">Laufzeit</div>
                </div>
                <div className="budget__card__content">
                    <div className="budget__card__content__duration">
                        <div className="budget__card__content__duration__infinity">
                            <div className="budget__card__content__duration__infinity__wrapper">
                                <div className="budget__card__content__duration__infinity__wrapper__text">
                                    Diese Anzeige schalten, bis Du sie anhältst
                                </div>
                                <Radio checked={isInfinity} onClick={handleRadioClick} />
                            </div>
                            <div className="budget__card__content__duration__infinity__text">
                                Du kannst diese Anzeige schalten, solange Du möchtest. In den
                                Insights kannst Du sie jederzeit beenden.
                            </div>
                        </div>
                        <div className="budget__card__content__duration__infinity">
                            <div className="budget__card__content__duration__infinity__wrapper">
                                <div className="budget__card__content__duration__infinity__wrapper__text">
                                    Dauer festlegen
                                </div>
                                <Radio checked={!isInfinity} onClick={handleRadioClick} />
                            </div>
                            <Slider
                                value={days}
                                marks={DAY_MARKS}
                                max={20}
                                onChange={handleDayChange}
                                valueLabelDisplay="auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Button variant="contained" onClick={handleButtonClick}>
                Weiter
            </Button>
        </div>
    );
};

Budget.displayName = 'Budget';

export default Budget;
