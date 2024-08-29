import { Route, Routes } from 'react-router-dom';
import HomeView from './home-view/HomeView';
import GymView from './gym-view/GymView';
import OrderOverview from './gym-view/gym-home-view/order-overview/OrderOverview';
import NotAvailable from './shared/not-available/NotAvailable';
import { createContext, useCallback, useMemo, useState } from 'react';
import { Gym } from '../types/gym';
import FooterView from './footer-view/FooterView';
import Dashboard from './gym-view/gym-home-view/dashboard/Dashboard';

interface IGymContext {
    gymInternalId?: Gym['id'];
    updateGymInternalId?: (id?: Gym['id']) => void;
}

export const GymContext = createContext<IGymContext>({
    gymInternalId: '',
    updateGymInternalId: undefined
});

GymContext.displayName = 'GymContext';

const App = () => {
    const [gymId, setGymId] = useState<IGymContext['gymInternalId']>('');

    const updateGymId = useCallback<(id?: Gym['id']) => void>((id) => {
        console.log(id);
        setGymId(id);
    }, []);

    const providerValue = useMemo<IGymContext>(
        () => ({
            updateGymInternalId: updateGymId,
            gymInternalId: gymId
        }),
        [gymId, updateGymId]
    );

    return (
        <div>test</div>
        // <GymContext.Provider value={providerValue}>
        //     <Routes>
        //         <Route path="/" element={<HomeView />} />
        //         <Route path="/:gym" element={<GymView />} />
        //         <Route path="/:gym/offers" element={<OrderOverview />} />
        //         <Route path="/:gym/*" element={<NotAvailable />} />
        //         <Route path="/:gym/dashboard" element={<Dashboard />} />
        //         <Route path="/impressum" element={<FooterView />} />
        //         <Route path="/data-protection" element={<FooterView />} />
        //         <Route path="/general" element={<FooterView />} />
        //         <Route path="/register-studio" element={<FooterView />} />
        //         <Route path="/q-and-a" element={<FooterView />} />
        //         <Route path="/terms-conditions" element={<FooterView />} />
        //         <Route path="/revocation" element={<FooterView />} />
        //     </Routes>
        // </GymContext.Provider>
    );
};

export default App;
