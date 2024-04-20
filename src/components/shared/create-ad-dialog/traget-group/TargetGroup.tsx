import './targetGroup.scss';
import { ChangeEvent, useState } from 'react';
import { Radio, Slider, TextField } from '@mui/material';

interface TargetGroupProps {
    onClick: () => void;
}

const TargetGroup = ({ onClick }: TargetGroupProps) => {
    const [isDefaultTarget, setIsDefaultTarget] = useState(true);
    const [forMan, setForMan] = useState(false);
    const [forWoman, setForWoman] = useState(false);
    const [age, setAge] = useState<number[]>([20, 30]);
    const [radius, setRadius] = useState(0);
    const [city, setCity] = useState('');

    const handleCityChange = (event: ChangeEvent<HTMLInputElement>) => {
        setCity(event.target.value);
    };

    const handleRadiusChange = (event: Event, newValue: number | number[]) => {
        setRadius(newValue as number);
    };

    const handleAgeChange = (event: Event, newValue: number | number[]) => {
        setAge(newValue as number[]);
    };

    const handleRadioClick = () => {
        setIsDefaultTarget((prevState) => !prevState);
    };

    return (
        <div className="target-group">
            <div className="target-group__card">
                <div className="target-group__card__head">
                    <div className="target-group__card__head__text">Vorgeschlagene Zielgruppe</div>
                    <Radio checked={isDefaultTarget} onClick={handleRadioClick} />
                </div>
            </div>
            <div className="target-group__card">
                <div className="target-group__card__head">
                    <div className="target-group__card__head__text">Eigene Zielgruppe</div>
                    <Radio checked={!isDefaultTarget} onClick={handleRadioClick} />
                </div>
                <div className="target-group__card__content">
                    <div className="target-group__card__content__age">
                        <div className="target-group__card__content__age__headline">
                            Alter & Geschlecht
                        </div>
                        <Slider value={age} onChange={handleAgeChange} valueLabelDisplay="auto" />
                        <div className="target-group__card__content__age__gender">
                            <div>Männlich</div>
                            <Radio
                                checked={forMan}
                                onClick={() => {
                                    setForMan((prevState) => !prevState);
                                }}
                            />
                        </div>
                        <div className="target-group__card__content__age__gender">
                            <div>Weiblich</div>
                            <Radio
                                checked={forWoman}
                                onClick={() => {
                                    setForWoman((prevState) => !prevState);
                                }}
                            />
                        </div>
                    </div>
                    <div className="target-group__card__content__location">
                        <div className="target-group__card__content__location__headline">
                            Standorte
                        </div>
                        <TextField
                            id="city"
                            label="Standort wählen"
                            variant="outlined"
                            value={city}
                            onChange={handleCityChange}
                            style={{ width: '100%' }}
                        />
                        <div className="target-group__card__content__location__radius">
                            <div className="target-group__card__content__location__radius__text">
                                Radius
                            </div>
                            <Slider
                                value={radius}
                                valueLabelDisplay="auto"
                                onChange={handleRadiusChange}
                                getAriaValueText={(value: number) => `${value}Km`}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

TargetGroup.displayName = 'TargetGroup';

export default TargetGroup;
