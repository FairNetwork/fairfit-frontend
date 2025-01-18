import { FC, ReactNode, useRef } from 'react';
import { useVisibility } from '../../../../hooks/visibility';
import './card.scss';

export type CardProps = {
    /**
     * The text of the badge.
     */
    badgeText?: string;
    /**
     * The text of the button.
     */
    buttonText?: string;
    /**
     * The content of the card.
     */
    children: ReactNode;
    /**
     * Function to be executed when the button is clicked.
     */
    onButtonClick?: () => void;
    /**
     * The width of the card.
     */
    width?: string;
};

const Card: FC<CardProps> = ({
    children,
    buttonText,
    onButtonClick,
    badgeText,
    width = '200px'
}) => {
    const ref = useRef<HTMLDivElement>(null);

    const isVisible = useVisibility('card-slider', ref);

    return (
        <div className="card" style={{ width, opacity: isVisible ? 1 : 0.6 }} ref={ref}>
            {badgeText && <div className="card__badge">{badgeText}</div>}
            <div className="card__content">{children}</div>
            {buttonText && (
                <div className="card__button" onClick={onButtonClick}>
                    {buttonText}
                </div>
            )}
        </div>
    );
};

Card.displayName = 'Card';

export default Card;
