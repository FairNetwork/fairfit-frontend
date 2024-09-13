import { Route, Routes } from 'react-router-dom';
import Home from './home/Home';
import Gym from './gym/Gym';
import Utility from './utility/Utility';
import NoContent from './no-content/NoContent';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/utility/*" element={<Utility />} />
            <Route path="/:gym" element={<Gym />} />
            <Route path="/no_content" element={<NoContent />} />

            {/*<Route path="/:gym/offers" element={<OrderOverview />} />*/}
            {/*<Route path="/:gym/*" element={<NotAvailable />} />*/}
            {/*<Route path="/:gym/dashboard" element={<Dashboard />} />*/}
            {/*<Route path="/impressum" element={<FooterView />} />*/}
            {/*<Route path="/data-protection" element={<FooterView />} />*/}
            {/*<Route path="/general" element={<FooterView />} />*/}
            {/*<Route path="/register-studio" element={<FooterView />} />*/}
            {/*<Route path="/q-and-a" element={<FooterView />} />*/}
            {/*<Route path="/terms-conditions" element={<FooterView />} />*/}
            {/*<Route path="/revocation" element={<FooterView />} />*/}
        </Routes>
    );
};

export default App;
