import './booking.scss';
import { useState } from 'react';
import Input from '../../components/shared/input/Input';
import ComboBox from '../../components/shared/combo-box/ComboBox';
import { GENDER_COMBOBOX_ITEMS } from '../../constants/gym';
import { Gender } from '../../types/gym';

const Booking = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [mail, setMail] = useState('');
    const [birthday, setBrithday] = useState('');
    const [gender, setGender] = useState<Gender>();
    const [postcode, setPostcode] = useState('');
    const [number, setNumber] = useState('');
    const [city, setCity] = useState('');
    const [street, setStreet] = useState('');

    return (
        <div className="booking">
            <div className="booking__headline"></div>
            <div className="booking__content">
                <div className="booking__content__text">Persönliche Daten</div>
                <Input
                    placeholder="Vorname"
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                />
                <Input
                    placeholder="Nachname"
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                />
                <Input
                    placeholder="E-Mail"
                    type="email"
                    value={mail}
                    onChange={(event) => setMail(event.target.value)}
                />
                <Input
                    placeholder="Geburtstag"
                    value={birthday}
                    type="date"
                    onChange={(event) => setBrithday(event.target.value)}
                />
                <ComboBox
                    placeholder="Geschlecht"
                    items={GENDER_COMBOBOX_ITEMS}
                    selectedItemId={String(gender)}
                    onSelect={(id) => setGender(Number(id))}
                />
                <div className="booking__content__text">Anschrift</div>
                <Input
                    placeholder="Straße"
                    value={street}
                    onChange={(event) => setStreet(event.target.value)}
                />
                <Input
                    placeholder="Hausnummer"
                    value={number}
                    onChange={(event) => setNumber(event.target.value)}
                />
                <Input
                    placeholder="Stadt"
                    value={city}
                    onChange={(event) => setCity(event.target.value)}
                />
                <Input
                    placeholder="PLZ"
                    value={postcode}
                    onChange={(event) => setPostcode(event.target.value)}
                />
            </div>
        </div>
    );
};

Booking.displayName = 'Booking';

export default Booking;
