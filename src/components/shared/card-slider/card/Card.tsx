import './card.scss';
import { FC, ReactNode, useEffect, useRef, useState } from 'react';

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
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    const checkVisibility = () => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            const inViewport =
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth);
            setIsVisible(inViewport);
        }
    };

    useEffect(() => {
        checkVisibility();
        window.addEventListener('scroll', checkVisibility);
        window.addEventListener('resize', checkVisibility);

        return () => {
            window.removeEventListener('scroll', checkVisibility);
            window.removeEventListener('resize', checkVisibility);
        };
    }, []);

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
