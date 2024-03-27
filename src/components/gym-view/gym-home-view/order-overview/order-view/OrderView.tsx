import React, { useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import SetupWizard, { SetupWizardRef } from './setup-wizard/SetupWizard';
import Summary from './summary/Summary';
import Form from './form/Form';
import Offers from './offers/Offers';
import Intro from './intro/Intro';
import { getOfferId } from '../../../../../utils/routes';
import { useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../../hooks/redux';
import { createSubscription, updateSubscription } from '../../../../../redux/user/actions';
import { GymContext } from '../../../../App';
import { selectUser } from '../../../../../redux/user/selectors';

const OrderView = () => {
    const dispatch = useAppDispatch();

    const { gymInternalId } = useContext(GymContext);

    const { selectedOfferId } = useAppSelector(selectUser);

    const [currentStep, setCurrentStep] = useState<number>(0);

    const setupRef = useRef<SetupWizardRef>(null);

    const location = useLocation();

    useEffect(() => {
        const offerId = getOfferId(location.search);

        if (offerId) {
            // setCurrentStep(1);
            setupRef.current?.complete();

            void dispatch(createSubscription({ offerId, gymName: gymInternalId }));
        }
    }, [dispatch, gymInternalId, location.search]);

    const handleStepChange = (step: number) => {
        setCurrentStep(step);
    };

    const handleOffersClick = useCallback(() => {
        if (selectedOfferId) {
            void dispatch(createSubscription({ offerId: selectedOfferId, gymName: gymInternalId }));
        }

        setupRef.current?.complete();
    }, [dispatch, gymInternalId, selectedOfferId]);

    const handleFormClick = useCallback(() => {
        void dispatch(updateSubscription(gymInternalId));

        setupRef.current?.complete();
    }, [dispatch, gymInternalId]);

    const content = useMemo(() => {
        switch (currentStep) {
            case 2:
                return <Summary />;
            case 1:
                return <Form onClick={() => handleFormClick()} />;
            default:
                return <Offers onClick={() => handleOffersClick()} />;
        }
    }, [currentStep, handleFormClick, handleOffersClick]);

    return (
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
            <Intro />
            <SetupWizard ref={setupRef} onChange={handleStepChange} />
            {content}
        </div>
    );
};

OrderView.displaName = 'OrderView';

export default OrderView;
