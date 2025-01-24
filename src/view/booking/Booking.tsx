import './booking.scss';
import Input from '../../components/shared/input/Input';
import ComboBox from '../../components/shared/combo-box/ComboBox';
import { GENDER_COMBOBOX_ITEMS } from '../../constants/gym';
import Button from '../../components/shared/button/Button';
import { useBookingData } from '../../hooks/booking';

const Booking = () => {
    const { setField, formData, isFormValid } = useBookingData();

    const {
        city,
        gender,
        iban,
        firstName,
        lastName,
        mail,
        number,
        owner,
        street,
        postcode,
        birthday
    } = formData;

    return (
        <div className="booking">
            <div className="booking__headline"></div>
            <div className="booking__content">
                <div className="booking__content__text">Persönliche Daten</div>
                <Input
                    placeholder="Vorname"
                    value={firstName}
                    onChange={(event) => setField('firstName', event.target.value)}
                />
                <Input
                    placeholder="Nachname"
                    value={lastName}
                    onChange={(event) => setField('lastName', event.target.value)}
                />
                <Input
                    placeholder="E-Mail"
                    type="email"
                    value={mail}
                    onChange={(event) => setField('mail', event.target.value)}
                />
                <Input
                    placeholder="Geburtstag"
                    value={birthday}
                    type="date"
                    onChange={(event) => setField('birthday', event.target.value)}
                />
                <ComboBox
                    placeholder="Geschlecht"
                    items={GENDER_COMBOBOX_ITEMS}
                    selectedItemId={String(gender)}
                    onSelect={(id) => setField('gender', Number(id))}
                />
                <div className="booking__content__text">Anschrift</div>
                <Input
                    placeholder="Straße"
                    value={street}
                    onChange={(event) => setField('street', event.target.value)}
                />
                <Input
                    placeholder="Hausnummer"
                    value={number}
                    onChange={(event) => setField('number', event.target.value)}
                />
                <Input
                    placeholder="Stadt"
                    value={city}
                    onChange={(event) => setField('city', event.target.value)}
                />
                <Input
                    placeholder="PLZ"
                    value={postcode}
                    onChange={(event) => setField('postcode', event.target.value)}
                />
                <div className="booking__content__text">Bezahlung</div>
                <Input
                    placeholder="Konto Inhaber"
                    value={owner}
                    onChange={(event) => setField('owner', event.target.value)}
                />
                <Input
                    placeholder="IBAN"
                    value={iban}
                    onChange={(event) => setField('iban', event.target.value)}
                />
                <Button isDisabled={!isFormValid}>Absenden</Button>
            </div>
        </div>
    );
};

Booking.displayName = 'Booking';

export default Booking;
