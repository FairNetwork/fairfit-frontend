import { Route, Routes } from 'react-router-dom';
import Home from './home/Home';
import Gym from './gym/Gym';
import Utility from './utility/Utility';
import NoContent from './no-content/NoContent';
import Booking from './booking/Booking';
import ConfirmRegistration from './confirm-registration/ConfirmRegistration';
import LogIn from './log-in/LogIn';
import DashBoard from './dasboard/Dashboard';
import SignUp from './sign-up/SignUp';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/utility/*" element={<Utility />} />
            <Route path="/:gym" element={<Gym />} />
            <Route path="/:gym/offers" element={<Booking />} />
            <Route path="/:gym/dashboard" element={<DashBoard />} />
            <Route path="/confirm-registration" element={<ConfirmRegistration />} />
            <Route path="/log-in" element={<LogIn />} />
            <Route path="/register-studio" element={<SignUp />} />
            <Route path="/no_content" element={<NoContent />} />
        </Routes>
    );
};

export default App;
