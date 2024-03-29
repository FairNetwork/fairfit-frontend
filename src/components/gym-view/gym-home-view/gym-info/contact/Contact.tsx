import './contact.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { useCallback, useContext } from 'react';
import { GymContext } from '../../../../App';
import { RootState } from '../../../../../redux/store';
import { selectContactById } from '../../../../../redux/gym/selectors';
import { useAppSelector } from '../../../../../hooks/redux';

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
            {contact?.phone && (
                <div className="contact__wrapper">
                    <div className="contact__wrapper__phone" onClick={() => handlePhoneClick()}>
                        <FontAwesomeIcon icon={faPhone} />
                        <div className="contact__wrapper__phone__text">{contact?.phone}</div>
                    </div>
                </div>
            )}
            {contact?.email && (
                <div className="contact__wrapper">
                    <div className="contact__wrapper__mail" onClick={() => handleMailClick()}>
                        <FontAwesomeIcon icon={faAt} />
                        <div className="contact__wrapper__mail__text">{contact?.email}</div>
                    </div>
                </div>
            )}
        </div>
    );
};

Contact.displayName = 'Contact';

export default Contact;
