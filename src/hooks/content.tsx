import { useLocation } from 'react-router-dom';
import { useMemo } from 'react';
import Gym from '../view/gym/Gym';
import Home from '../view/home/Home';
import Utility from '../view/utility/Utility';
import NoContent from '../view/no-content/NoContent';
import Dashboard from '../view/dashboard/Dashboard';
import LogIn from '../view/log-in/LogIn';
import SignUp from '../view/sign-up/SignUp';
import Secret from '../view/secret/Secret';
import Booking from '../view/booking/Booking';

export const useContent = () => {
    const location = useLocation();

    return useMemo(() => {
        const path = location.pathname;

        if (path === '/no_content') return <NoContent />;
        if (/^\/utility\/[^/]+$/.test(path)) return <Utility />;
        // if (path === '/confirm-registration') return <ConfirmRegistration />;
        if (path === '/log-in') return <LogIn />;
        if (path.includes('/sign-up')) return <SignUp />;
        if (path === '/secret') return <Secret />;
        if (/^\/[^/]+\/offers$/.test(path)) return <Booking />;
        if (/^\/[^/]+\/dashboard\/.+/.test(path)) return <Dashboard />;
        if (/^\/[^/]+$/.test(path)) return <Gym />;

        return <Home />;
    }, [location.pathname]);
};
