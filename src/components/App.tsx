import { useContent } from '../hooks/content';
import ColorSchemeProvider from './shared/color-scheme-provider/ColorSchemeProvider';
import { THEME } from '../constants/theme';
import { useColorMode } from '../hooks/color';
import Sidebar from './shared/sidebar/Sidebar';
import Header from './shared/header/Header';
import Footer from './shared/footer/Footer';
import './app.scss';
import { ReactNode, useEffect, useLayoutEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import SplashScreen from './shared/splash-screen/SplashScreen';
import { useSidebarProvider } from './shared/sidebar/SidebarProvider';
import { useIsMobile } from '../hooks/environment';
import { useScrollToTop } from '../hooks/scroll';
import Dialog from './shared/dialog/Dialog';

const App = () => {
    const content = useContent();
    const colorMode = useColorMode();
    const isMobile = useIsMobile();
    const { width, isOpen } = useSidebarProvider();
    useScrollToTop('app-content');

    const [shouldShowSplashScreen, setShouldShowSplashScreen] = useState(true);
    const [dialogContent, setDialogContent] = useState<ReactNode>();

    useLayoutEffect(() => {
        window.setTimeout(() => {
            setShouldShowSplashScreen(false);
        }, 3000);
    }, []);

    useEffect(() => {
        window.openDialog = (content: ReactNode) => {
            setDialogContent(content);
        };

        window.closeDialog = () => {
            setDialogContent(undefined);
        };
    }, []);

    return (
        <ColorSchemeProvider colors={THEME} colorMode={colorMode}>
            <AnimatePresence initial={false}>
                {dialogContent && <Dialog>{dialogContent}</Dialog>}
            </AnimatePresence>
            <AnimatePresence initial={false}>
                {shouldShowSplashScreen && <SplashScreen />}
            </AnimatePresence>
            <div className="app">
                <AnimatePresence initial={false}>
                    <Sidebar />
                </AnimatePresence>
                <div
                    className="app__wrapper"
                    style={{ width: isMobile ? '100vw' : `calc(100vw - 1px - ${width})` }}>
                    <Header />
                    <div className="app__wrapper__content" id="app-content">
                        {content}
                    </div>
                    <Footer />
                </div>
            </div>
        </ColorSchemeProvider>
    );
};

App.displayName = 'App';

export default App;
