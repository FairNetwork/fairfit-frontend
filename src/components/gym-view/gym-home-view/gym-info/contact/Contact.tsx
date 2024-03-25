import { Button, TextField } from '@mui/material';
import './contact.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { useCallback, useContext, useState } from 'react';
import { GymContext } from '../../../../App';
import { RootState } from '../../../../../redux/store';
import { selectContactById } from '../../../../../redux/gym/selectors';
import { useAppSelector } from '../../../../../hooks/redux';

const Contact = () => {
    const { gymId } = useContext(GymContext);

    const contactSelector = useCallback(
        (state: RootState) => selectContactById(state, gymId),
        [gymId]
    );

    const contact = useAppSelector(contactSelector);

    const [value, setValue] = useState('');

    const handlePhoneClick = () => {
        window.open(`tel:+${contact?.phone.replace('/', '')}`);
    };

    return (
        <div className="contact">
            <div className="contact__title">Kontakt</div>
            {contact?.phone && (
                <div className="contact__phone" onClick={() => handlePhoneClick()}>
                    <FontAwesomeIcon icon={faPhone} />
                    <div className="contact__phone__text">{contact?.phone}</div>
                </div>
            )}
            {contact?.email && (
                <>
                    <div>
                        <TextField
                            id="contact-email"
                            label="Schreibe uns eine E-Mail"
                            multiline
                            minRows={3}
                            maxRows={5}
                            value={value}
                            onChange={(event) => setValue(event.target.value)}
                            variant="outlined"
                            style={{ width: '100%' }}
                        />
                    </div>
                    <div className="contact__button">
                        <Button variant={'contained'} disabled={value.length === 0}>
                            Senden
                        </Button>
                    </div>
                </>
            )}
        </div>
    );
};

Contact.displayName = 'Contact';

export default Contact;
