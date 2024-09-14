// import './targetGroup.scss';
// import { ChangeEvent, useMemo, useState } from 'react';
// import { Button, Radio, Slider, TextField, Tooltip } from '@mui/material';
// import { isMobile } from '../../../../utils/environment';
//
// const AGE_MARKS = [
//     {
//         value: 10,
//         label: '10'
//     },
//     {
//         value: 20,
//         label: '20'
//     },
//     {
//         value: 30,
//         label: '30'
//     },
//     {
//         value: 40,
//         label: '40'
//     },
//     {
//         value: 50,
//         label: '50'
//     },
//     {
//         value: 60,
//         label: '60'
//     },
//     {
//         value: 70,
//         label: '70'
//     },
//     {
//         value: 80,
//         label: '80'
//     },
//     {
//         value: 90,
//         label: '90'
//     }
// ];
//
// const RADIUS_MARKS = [
//     {
//         value: 1,
//         label: '1'
//     },
//     {
//         value: 5,
//         label: '5'
//     },
//     {
//         value: 10,
//         label: '10'
//     },
//     {
//         value: 20,
//         label: '20'
//     },
//     {
//         value: 30,
//         label: '30'
//     },
//     {
//         value: 40,
//         label: '40'
//     },
//     {
//         value: 50,
//         label: '50'
//     }
// ];
//
// interface TargetGroupProps {
//     onClick: () => void;
// }
//
// const TargetGroup = ({ onClick }: TargetGroupProps) => {
//     const [isDefaultTarget, setIsDefaultTarget] = useState(true);
//     const [forMan, setForMan] = useState(false);
//     const [forWoman, setForWoman] = useState(false);
//     const [age, setAge] = useState<number[]>([20, 30]);
//     const [radius, setRadius] = useState(1);
//     const [city, setCity] = useState('');
//     const [isTooltipOpen, setIsTooltipOpen] = useState(false);
//
//     const isButtonDisabled = useMemo(() => {
//         return !isDefaultTarget && (city.length === 0 || (!forWoman && !forMan));
//     }, [city.length, forMan, forWoman, isDefaultTarget]);
//
//     const handleCityChange = (event: ChangeEvent<HTMLInputElement>) => {
//         setCity(event.target.value);
//     };
//
//     const handleRadiusChange = (event: Event, newValue: number | number[]) => {
//         setRadius(newValue as number);
//     };
//
//     const handleAgeChange = (event: Event, newValue: number | number[]) => {
//         setAge(newValue as number[]);
//     };
//
//     const handleRadioClick = () => {
//         setIsDefaultTarget((prevState) => !prevState);
//     };
//
//     const handleButtonClick = () => {
//         onClick();
//     };
//
//     return (
//         <div className="target-group">
//             <div className="target-group__card">
//                 <div className="target-group__card__head">
//                     <div className="target-group__card__head__text">Vorgeschlagene Zielgruppe</div>
//                     <Radio checked={isDefaultTarget} onClick={handleRadioClick} />
//                 </div>
//             </div>
//             <div className="target-group__card">
//                 <div className="target-group__card__head">
//                     <div className="target-group__card__head__text">Eigene Zielgruppe</div>
//                     <Radio checked={!isDefaultTarget} onClick={handleRadioClick} />
//                 </div>
//                 <div className="target-group__card__content">
//                     <div className="target-group__card__content__age">
//                         <div className="target-group__card__content__age__headline">
//                             Alter & Geschlecht
//                         </div>
//                         <Slider
//                             value={age}
//                             marks={AGE_MARKS}
//                             onChange={handleAgeChange}
//                             valueLabelDisplay="auto"
//                         />
//                         <div className="target-group__card__content__age__gender">
//                             <div>Männlich</div>
//                             <Radio
//                                 checked={forMan}
//                                 onClick={() => {
//                                     setForMan((prevState) => !prevState);
//                                 }}
//                             />
//                         </div>
//                         <div className="target-group__card__content__age__gender">
//                             <div>Weiblich</div>
//                             <Radio
//                                 checked={forWoman}
//                                 onClick={() => {
//                                     setForWoman((prevState) => !prevState);
//                                 }}
//                             />
//                         </div>
//                     </div>
//                     <div className="target-group__card__content__location">
//                         <div className="target-group__card__content__location__headline">
//                             Standorte
//                         </div>
//                         <TextField
//                             id="city"
//                             label="Standort wählen"
//                             variant="outlined"
//                             value={city}
//                             onChange={handleCityChange}
//                             style={{ width: '100%' }}
//                         />
//                         <div className="target-group__card__content__location__radius">
//                             <div className="target-group__card__content__location__radius__text">
//                                 Radius
//                             </div>
//                             <Slider
//                                 max={60}
//                                 marks={RADIUS_MARKS}
//                                 value={radius}
//                                 valueLabelDisplay="auto"
//                                 onChange={handleRadiusChange}
//                                 getAriaValueText={(value: number) => `${value}Km`}
//                             />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <Tooltip
//                 title="Bitte gebe mindestens ein Geschlecht und einen Standort an"
//                 open={isTooltipOpen}
//                 onClose={() => setIsTooltipOpen(false)}
//                 placement="top"
//                 arrow>
//                 <span
//                     onClick={() =>
//                         isButtonDisabled && isMobile() ? setIsTooltipOpen(true) : undefined
//                     }
//                     onMouseEnter={() => (isButtonDisabled ? setIsTooltipOpen(true) : undefined)}
//                     onMouseLeave={() => (isButtonDisabled ? setIsTooltipOpen(false) : undefined)}>
//                     <Button
//                         variant="contained"
//                         disabled={isButtonDisabled}
//                         onClick={handleButtonClick}>
//                         Weiter
//                     </Button>
//                 </span>
//             </Tooltip>
//         </div>
//     );
// };
//
// TargetGroup.displayName = 'TargetGroup';
//
// export default TargetGroup;
