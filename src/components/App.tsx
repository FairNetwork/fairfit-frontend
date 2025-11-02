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
import Navigation from './shared/navigation/Navigation';

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
            <div className="app">
                <Navigation />
            </div>
        </ColorSchemeProvider>
    );
};

App.displayName = 'App';

export default App;
