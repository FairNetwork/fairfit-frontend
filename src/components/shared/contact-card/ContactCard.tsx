import './contactCard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-regular-svg-icons';
import { CSSProperties } from 'react';

interface ContactCardProps {
    onClick?: VoidFunction;
    icon: IconDefinition;
    title: string;
    text: string;
    color?: CSSProperties['backgroundColor'];
}

const ContactCard = ({ text, title, onClick, icon, color }: ContactCardProps) => {
    return (
        <div className="contact-card" onClick={onClick} style={{ backgroundColor: color }}>
            <div className="contact-card__icon">
                <FontAwesomeIcon icon={icon} size={'xl'} />
            </div>
            <div className="contact-card__wrapper">
                <div className="contact-card__wrapper__headline">{title}</div>
                <div className="contact-card__wrapper__text">{text}</div>
            </div>
        </div>
    );
};

ContactCard.displayName = 'ContactCard';

export default ContactCard;
