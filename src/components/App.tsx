import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Allotment, type AllotmentHandle } from 'allotment';
import { useLocation } from 'react-router-dom';
import './app.scss';
import clsx from 'clsx';
import LeftWrapper from './left-wrapper/LeftWrapper';
import Home from './home/Home';
import NoContent from './no-content/NoContent';
import Utility from './utility/Utility';
import ConfirmRegistration from './confirm-registration/ConfirmRegistration';
import LogIn from './log-in/LogIn';
import SignUp from './sign-up/SignUp';
import Booking from './booking/Booking';
import Gym from './gym/Gym';
import Header from './header/Header';
import Dashboard from './dasboard/Dashboard';

const App = () => {
    const allotmentRef = useRef<AllotmentHandle>(null);

    const [snapAnchor, setSnapAnchor] = useState(0);

    const location = useLocation();

    const isMobile = window.innerWidth < 1025;

    // Handle drag end for Allotment pane resizing
    const handleAllotmentDragEnd = useCallback(
        (sizes: number[]) => {
            const [leftSize] = sizes;

            if (typeof leftSize === 'number' && leftSize < snapAnchor) {
                const closeToSnap = Math.abs(leftSize - snapAnchor) > Math.abs(leftSize - 62);
                allotmentRef.current?.resize([closeToSnap ? 62 : snapAnchor]);
            }
        },
        [snapAnchor]
    );

    // Calculate snap anchor on mount based on text width
    useEffect(() => {
        // const biggestTextWidth = calculateBiggestTextWidth(
        //     // APP_LEFT_ELEMENTS.map(({ text }) => text)
        // );
        setSnapAnchor(100 + 77); // 67px + padding and margins
    }, []);

    // Determine the right pane content
    const rightElement = useMemo(() => {
        const path = location.pathname;
        if (path === '/no_content') return <NoContent />;
        if (/^\/utility\/[^/]+$/.test(path)) return <Utility />;
        if (path === '/confirm-registration') return <ConfirmRegistration />;
        if (path === '/log-in') return <LogIn />;
        if (path === '/register-studio') return <SignUp />;

        if (/^\/[^/]+\/offers$/.test(path)) return <Booking />;
        if (/^\/[^/]+\/dashboard\/.+/.test(path)) return <Dashboard />;
        if (/^\/[^/]+$/.test(path)) return <Gym />;

        return <Home />;
    }, [location.pathname]);

    // Right pane class based on device type
    const rightElementClasses = clsx('app__content__right-wrapper', {
        'app__content__right-wrapper--mobile': false
    });

    return useMemo(
        () => (
            <div className="app">
                <header className="app__header">
                    <Header />
                </header>
                <main className="app__content">
                    <Allotment
                        separator={false}
                        onDragEnd={handleAllotmentDragEnd}
                        ref={allotmentRef}
                        proportionalLayout={true}>
                        <Allotment.Pane minSize={62} maxSize={300} preferredSize={snapAnchor + 50}>
                            <div className="app__content__left-wrapper">
                                <LeftWrapper />
                            </div>
                        </Allotment.Pane>
                        <Allotment.Pane>
                            <div className={rightElementClasses}>{rightElement}</div>
                        </Allotment.Pane>
                    </Allotment>
                </main>
            </div>
        ),
        [handleAllotmentDragEnd, rightElement, rightElementClasses, snapAnchor]
    );
};

export default App;
