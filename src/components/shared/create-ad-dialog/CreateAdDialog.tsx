import './createAdDialog.scss';
import React, { useMemo, useRef, useState } from 'react';
import SetupWizard, { SetupWizardRef } from '../setup-wizard/SetupWizard';
import Summary from '../../gym-view/gym-home-view/order-overview/order-view/summary/Summary';
import Form from '../../gym-view/gym-home-view/order-overview/order-view/form/Form';
import Intro from '../../gym-view/gym-home-view/order-overview/order-view/intro/Intro';
import Upload from './upload/Upload';
import TargetGroup from './traget-group/TargetGroup';

const CreateAdDialog = () => {
    const [currentStep, setCurrentStep] = useState<number>(0);

    const setupRef = useRef<SetupWizardRef>(null);

    const handleStepChange = (step: number) => {
        setCurrentStep(step);
    };

    const content = useMemo(() => {
        switch (currentStep) {
            case 3:
            case 2:
                return <Summary />;
            case 1:
                return <TargetGroup onClick={() => setupRef.current?.complete()} />;
            default:
                return <Upload onClick={() => setupRef.current?.complete()} />;
        }
    }, [currentStep]);

    return (
        <div className="create-ad-dialog">
            <SetupWizard
                ref={setupRef}
                steps={[
                    '',
                    'Wer soll Deine Werbeanzeige sehen?',
                    'Wie hoch sollen Deine Werbeausgaben sein?',
                    'Begünstigen & Zahlenden Überprüfen'
                ]}
                onChange={handleStepChange}
            />
            {content}
        </div>
    );
};

CreateAdDialog.displayName = 'CreateAdDialog';

export default CreateAdDialog;
