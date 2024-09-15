import './bookingContent.scss';
import PersonalData from './personal-data/PersonalData';
import Address from './address/Address';
import Payment from './payment/Payment';
import SendButton from './send-button/SendButton';

const BookingContent = () => {
    return (
        <div className="booking-content">
            <PersonalData />
            <Address />
            <Payment />
            <SendButton />
        </div>
    );
};

BookingContent.displayName = 'BookingContent';

export default BookingContent;
