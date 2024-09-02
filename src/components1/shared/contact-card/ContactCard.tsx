import './contactCard.scss';
import { CSSProperties } from 'react';
import Icon from '../../../components/shared/icon/Icon';

interface ContactCardProps {
    onClick?: VoidFunction;
    icon: string;
    title: string;
    text: string;
    color?: CSSProperties['backgroundColor'];
}

const ContactCard = ({ text, title, onClick, icon, color }: ContactCardProps) => {
    return (
        <div className="contact-card" onClick={onClick} style={{ backgroundColor: color }}>
            <div className="contact-card__icon">
                <Icon icon={icon} size="large" />
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
