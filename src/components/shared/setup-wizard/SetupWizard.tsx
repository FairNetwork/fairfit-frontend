import { forwardRef, useCallback, useImperativeHandle, useState } from 'react';
import { Step, StepButton, Stepper } from '@mui/material';
import './setupWizard.scss';

export interface SetupWizardRef {
    next: VoidFunction;
    complete: VoidFunction;
    back: VoidFunction;
}

interface SetupWizardProps {
    onChange: (step: number) => void;
    steps: string[];
}

const SetupWizard = forwardRef<SetupWizardRef, SetupWizardProps>(({ onChange, steps }, ref) => {
    const [activeStep, setActiveStep] = useState(0);
    const [completed, setCompleted] = useState<{
        [k: number]: boolean;
    }>({});

    const totalSteps = () => {
        return steps.length;
    };

    const getMaxCompleted = () => {
        let maxKey = -Infinity;
        for (let key in completed) {
            if (completed.hasOwnProperty(key) && typeof parseInt(key) === 'number') {
                maxKey = Math.max(maxKey, parseInt(key));
            }
        }
        return maxKey;
    };

    const completedSteps = useCallback(() => {
        return Object.keys(completed).length;
    }, [completed]);

    const isLastStep = useCallback(() => {
        return activeStep === totalSteps() - 1;
    }, [activeStep]);

    const allStepsCompleted = useCallback(() => {
        return completedSteps() === totalSteps();
    }, [completedSteps]);

    const handleNext = useCallback(() => {
        const newActiveStep =
            isLastStep() && !allStepsCompleted()
                ? // It's the last step, but not all steps have been completed,
                  // find the first step that has been completed
                  steps.findIndex((step, i) => !(i in completed))
                : activeStep + 1;
        setActiveStep(newActiveStep);

        onChange(newActiveStep);
    }, [activeStep, allStepsCompleted, completed, isLastStep, onChange]);

    const handleBack = useCallback(() => {
        setActiveStep((prevActiveStep) => {
            const newStep = prevActiveStep - 1;

            onChange(newStep);

            return newStep;
        });
    }, [onChange]);

    const handleStep = (step: number) => () => {
        const maxCompleted = getMaxCompleted();

        if (step <= maxCompleted + 1) {
            setActiveStep(step);

            onChange(step);
        }
    };

    const handleComplete = useCallback(() => {
        const newCompleted = completed;
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        handleNext();
    }, [activeStep, completed, handleNext]);

    useImperativeHandle(
        ref,
        () => ({
            next: handleNext,
            complete: handleComplete,
            back: handleBack
        }),
        [handleBack, handleComplete, handleNext]
    );

    return (
        <div className="setup-wizard">
            <div className="setup-wizard__steps">
                <Stepper activeStep={activeStep}>
                    {steps.map((label, index) => (
                        <Step key={label} completed={completed[index]} onClick={handleStep(index)}>
                            <StepButton />
                        </Step>
                    ))}
                </Stepper>
            </div>
            <div className="setup-wizard__step-info">{steps[activeStep]}</div>
        </div>
    );
});

SetupWizard.displayName = 'SetupWizard';

export default SetupWizard;
