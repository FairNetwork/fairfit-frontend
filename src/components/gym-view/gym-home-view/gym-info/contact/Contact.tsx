import './contact.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { useCallback, useContext } from 'react';
import { GymContext } from '../../../../App';
import { RootState } from '../../../../../redux/store';
import { selectContactById } from '../../../../../redux/gym/selectors';
import { useAppSelector } from '../../../../../hooks/redux';
import ContactCard from '../../../../shared/contact-card/ContactCard';

const Contact = () => {
    const { gymInternalId } = useContext(GymContext);

    const contactSelector = useCallback(
        (state: RootState) => selectContactById(state, gymInternalId),
        [gymInternalId]
    );

    const contact = useAppSelector(contactSelector);

    const handlePhoneClick = () => {
        window.open(`tel:${contact?.phone?.replace('/', '')}`);
    };

    const handleMailClick = () => {
        window.open(`mailto:${contact?.email}?subject=E-Mail-Anfrage via FairFit`);
    };

    return (
        <div className="contact">
            <div className="contact__title">Kontakt</div>
            <div className="contact__content">
                {contact?.phone && (
                    <ContactCard
                        icon={faPhone}
                        text={contact?.phone}
                        title="Telefon"
                        onClick={() => handlePhoneClick()}
                    />
                )}
                {contact?.email && (
                    <ContactCard
                        icon={faAt}
                        text={contact?.email}
                        title="E-Mail"
                        onClick={() => handleMailClick()}
                    />
                )}
            </div>
        </div>
    );
};

Contact.displayName = 'Contact';

export default Contact;
