import { Route, Routes } from 'react-router-dom';
import Home from './home/Home';
import Gym from './gym/Gym';
import Utility from './utility/Utility';
import NoContent from './no-content/NoContent';
import Booking from './booking/Booking';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/utility/*" element={<Utility />} />
            <Route path="/:gym" element={<Gym />} />
            <Route path="/:gym/offers" element={<Booking />} />
            <Route path="/no_content" element={<NoContent />} />
        </Routes>
    );
};

export default App;
