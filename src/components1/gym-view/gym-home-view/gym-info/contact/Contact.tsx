import './contact.scss';
import { useCallback, useContext } from 'react';
import { GymContext } from '../../../../App';
import { RootState } from '../../../../../redux/store';
import { selectContactById } from '../../../../../redux/gym/selectors';
import { useAppSelector } from '../../../../../hooks1/redux';
import ContactCard from '../../../../shared/contact-card/ContactCard';
import { GymInfoContext } from '../GymInfo';

const Contact = () => {
    const { gymInternalId } = useContext(GymContext);
    const { contactCardGap } = useContext(GymInfoContext);

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
            <h2>Kontakt</h2>
            <div className="contact__content" style={{ columnGap: contactCardGap }}>
                {contact?.phone && (
                    <ContactCard
                        icon="bi-telephone"
                        text={contact?.phone}
                        title="Telefon"
                        onClick={() => handlePhoneClick()}
                    />
                )}
                {contact?.email && (
                    <ContactCard
                        icon="bi-at"
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
