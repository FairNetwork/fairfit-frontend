import React, { useEffect, useMemo, useRef, useState } from 'react';
import SetupWizard, { SetupWizardRef } from './setup-wizard/SetupWizard';
import Summary from './summary/Summary';
import Form from './form/Form';
import Offers from './offers/Offers';
import Intro from './intro/Intro';
import { getOfferId } from '../../../../../utils/routes';
import { useLocation } from 'react-router-dom';

const OrderView = () => {
    const [currentStep, setCurrentStep] = useState<number>(0);

    const setupRef = useRef<SetupWizardRef>(null);

    const location = useLocation();

    useEffect(() => {
        const offerId = getOfferId(location.search);

        if (offerId) {
            // setCurrentStep(1);
            setupRef.current?.complete();
        }
    }, [location.search]);

    const handleStepChange = (step: number) => {
        setCurrentStep(step);
    };

    const content = useMemo(() => {
        switch (currentStep) {
            case 2:
                return <Summary />;
            case 1:
                return <Form onClick={() => setupRef.current?.complete()} />;
            default:
                return <Offers onClick={() => setupRef.current?.complete()} />;
        }
    }, [currentStep]);

    return (
        <div>
            <Intro />
            <SetupWizard ref={setupRef} onChange={handleStepChange} />
            {content}
        </div>
    );
};

OrderView.displaName = 'OrderView';

export default OrderView;
