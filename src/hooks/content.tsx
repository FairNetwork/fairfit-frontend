import { useLocation } from 'react-router-dom';
import { useMemo } from 'react';
import Gym from '../view/gym/Gym';

export const useContent = () => {
    const location = useLocation();

    return useMemo(() => {
        const path = location.pathname;

        // if (path === '/no_content') return <NoContent />;
        // if (/^\/utility\/[^/]+$/.test(path)) return <Utility />;
        // if (path === '/confirm-registration') return <ConfirmRegistration />;
        // if (path === '/log-in') return <LogIn />;
        // if (path === '/register-studio') return <SignUp />;
        // if (/^\/[^/]+\/offers$/.test(path)) return <Booking />;
        // if (/^\/[^/]+\/dashboard\/.+/.test(path)) return <Dashboard />;
        if (/^\/[^/]+$/.test(path)) return <Gym />;
        //
        // return <Home />;

        return path;
    }, [location.pathname]);
};
