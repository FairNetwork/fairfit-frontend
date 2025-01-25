import './gymCard.scss';

const GymCard = () => {
    return (
        <div className="gym-card">
            <div className="gym-card__name">Osterspecial</div>
            <div className="gym-card__price">
                24.99€ /&nbsp;<div className="gym-card__price__monthly">monatlich</div>
            </div>
            <ul className="gym-card__list">
                <li>TEST</li>
                <li>TEST</li>
                <li>TEST</li>
                <li>TEST</li>
                <li>TEST</li>
            </ul>
        </div>
    );
};

GymCard.displayName = 'GymCard';

export default GymCard;
