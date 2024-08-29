import Accordion from '../../../../../shared/accordion/Accordion';
import Address from './address/Address';
import React, { useState } from 'react';
import PersonalData from './personal-data/PersonalData';
import Payment from './payment/Payment';
import './form.scss';
import { Button, Tooltip } from '@mui/material';
import { useAppSelector } from '../../../../../../hooks1/redux';
import { selectIsDisabled } from '../../../../../../redux/user/selectors';
import { isMobile } from '../../../../../../utils1/environment';

interface FormProps {
    onClick: VoidFunction;
}

const Form = ({ onClick }: FormProps) => {
    const isDisabled = useAppSelector(selectIsDisabled);

    const [isTooltipOpen, setIsTooltipOpen] = useState(false);

    return (
        <div className="form">
            <Accordion id={1} isDefaultOpen title={'Persönliche Daten'}>
                <PersonalData />
            </Accordion>
            <Accordion id={2} title={'Adresse'}>
                <Address />
            </Accordion>
            <Accordion id={3} title={'Zahlungsinformationen'}>
                <Payment />
            </Accordion>
            <div className="form__button">
                <Tooltip
                    title="Bitte gebe alle Daten ein"
                    open={isTooltipOpen}
                    onClose={() => setIsTooltipOpen(false)}
                    placement="top"
                    arrow>
                    <span
                        onClick={() =>
                            isDisabled && isMobile() ? setIsTooltipOpen(true) : undefined
                        }
                        onMouseEnter={() => (isDisabled ? setIsTooltipOpen(true) : undefined)}
                        onMouseLeave={() => (isDisabled ? setIsTooltipOpen(false) : undefined)}>
                        <Button variant="contained" disabled={isDisabled} onClick={() => onClick()}>
                            Weiter
                        </Button>
                    </span>
                </Tooltip>
            </div>
        </div>
    );
};

Form.displayName = 'Form';

export default Form;
