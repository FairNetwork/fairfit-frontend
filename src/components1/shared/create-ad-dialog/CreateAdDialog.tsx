// import './createAdDialog.scss';
// import React, { useMemo, useRef, useState } from 'react';
// import SetupWizard, { SetupWizardRef } from '../setup-wizard/SetupWizard';
// import Upload from './upload/Upload';
// import TargetGroup from './traget-group/TargetGroup';
// import Budget from './budget/Budget';
// import Summary from './summary/Summary';
//
// interface CreateAdDialogProps {
//     onFinish: () => void;
// }
//
// const CreateAdDialog = ({ onFinish }: CreateAdDialogProps) => {
//     const [currentStep, setCurrentStep] = useState<number>(0);
//
//     const setupRef = useRef<SetupWizardRef>(null);
//
//     const handleStepChange = (step: number) => {
//         setCurrentStep(step);
//     };
//
//     const content = useMemo(() => {
//         switch (currentStep) {
//             case 3:
//                 return <Summary onClick={onFinish} />;
//             case 2:
//                 return <Budget onClick={() => setupRef.current?.complete()} />;
//             case 1:
//                 return <TargetGroup onClick={() => setupRef.current?.complete()} />;
//             default:
//                 return <Upload onClick={() => setupRef.current?.complete()} />;
//         }
//     }, [currentStep, onFinish]);
//
//     return (
//         <div className="create-ad-dialog">
//             <SetupWizard
//                 ref={setupRef}
//                 steps={[
//                     '',
//                     'Wer soll Deine Werbeanzeige sehen?',
//                     'Wie hoch sollen Deine Werbeausgaben sein?',
//                     'Begünstigen & Zahlenden Überprüfen'
//                 ]}
//                 onChange={handleStepChange}
//             />
//             {content}
//         </div>
//     );
// };
//
// CreateAdDialog.displayName = 'CreateAdDialog';
//
// export default CreateAdDialog;
