import { useContent } from '../hooks/content';
import ColorSchemeProvider from './shared/color-scheme-provider/ColorSchemeProvider';
import { THEME } from '../constants/theme';
import { useColorMode } from '../hooks/color';
import Sidebar from './shared/sidebar/Sidebar';
import Header from './shared/header/Header';
import './app.scss';
import CardSlider from './shared/card-slider/CardSlider';

const App = () => {
    const content = useContent();
    const colorMode = useColorMode();

    return (
        <ColorSchemeProvider colors={THEME} colorMode={colorMode}>
            <div className="app">
                <Sidebar />
                <div className="app__wrapper">
                    <Header />
                    <div className="app__wrapper__content">
                        {content}
                        <CardSlider />
                    </div>
                </div>
            </div>
        </ColorSchemeProvider>
    );
};

App.displayName = 'App';

export default App;
