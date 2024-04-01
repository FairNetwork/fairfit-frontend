import './contactCard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-regular-svg-icons';

interface ContactCardProps {
    onClick?: VoidFunction;
    icon: IconDefinition;
    title: string;
    text: string;
}

const ContactCard = ({ text, title, onClick, icon }: ContactCardProps) => {
    return (
        <div className="contact-card" onClick={onClick}>
            <div className="contact-card__icon">
                <FontAwesomeIcon icon={icon} size={'2xl'} />
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