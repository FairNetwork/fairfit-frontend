import './cardSlider.scss';
import { FC, ReactNode } from 'react';

interface CardSliderProps {
    /**
     * The content of the slider.
     */
    children: ReactNode;
}

const CardSlider: FC<CardSliderProps> = ({ children }) => {
    return (
        <div className="card-slider" id="card-slider">
            {children}
        </div>
    );
};

CardSlider.displayName = 'CardSlider';

export default CardSlider;
