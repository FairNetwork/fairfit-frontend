import { useContent } from '../hooks/content';
import ColorSchemeProvider from './shared/color-scheme-provider/ColorSchemeProvider';
import { THEME } from '../constants/theme';
import { useColorMode } from '../hooks/color';
import Sidebar from './shared/sidebar/Sidebar';
import Header from './shared/header/Header';
import Footer from './shared/footer/Footer';
import './app.scss';
import { useLayoutEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import SplashScreen from './shared/splash-screen/SplashScreen';

const App = () => {
    const content = useContent();
    const colorMode = useColorMode();

    const [shouldShowSplashScreen, setShouldShowSplashScreen] = useState(true);

    useLayoutEffect(() => {
        window.setTimeout(() => {
            setShouldShowSplashScreen(false);
        }, 3000);
    }, []);

    return (
        <ColorSchemeProvider colors={THEME} colorMode={colorMode}>
            <AnimatePresence initial={false}>
                {shouldShowSplashScreen && <SplashScreen />}
            </AnimatePresence>
            <div className="app">
                <Sidebar />
                <div className="app__wrapper">
                    <Header />
                    <div className="app__wrapper__content">{content}</div>
                    <Footer />
                </div>
            </div>
        </ColorSchemeProvider>
    );
};

App.displayName = 'App';

export default App;
