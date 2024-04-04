import { Route, Routes } from 'react-router-dom';
import HomeView from './home-view/HomeView';
import LoginView from './login-view/LoginView';
import GymView from './gym-view/GymView';
import OrderOverview from './gym-view/gym-home-view/order-overview/OrderOverview';
import NotAvailable from './shared/not-available/NotAvailable';
import { createContext, useCallback, useMemo, useState } from 'react';
import { Gym } from '../types/gym';
import Impressum from './footer-views/impressum/Impressum';

interface IGymContext {
    gymInternalId: Gym['id'];
    updateGymInternalId?: (id: Gym['id']) => void;
}

export const GymContext = createContext<IGymContext>({
    gymInternalId: '',
    updateGymInternalId: undefined
});

GymContext.displayName = 'GymContext';

const App = () => {
    const [gymId, setGymId] = useState<IGymContext['gymInternalId']>('');

    const updateGymId = useCallback<(id: Gym['id']) => void>((id) => {
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
        <GymContext.Provider value={providerValue}>
            <Routes>
                <Route path="/" element={<HomeView />} />
                <Route path="/:gym" element={<GymView />} />
                <Route path="/:gym/offers" element={<OrderOverview />} />
                <Route path="/:gym/*" element={<NotAvailable />} />
                <Route path="/:gym/dashboard" element={<div>Dashboard</div>} />
                <Route path="/login" element={<LoginView />} />
                <Route path="/impressum" element={<Impressum />} />
            </Routes>
        </GymContext.Provider>
    );
};

export default App;
