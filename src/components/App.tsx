import { useContent } from '../hooks/content';
import ColorSchemeProvider from './shared/color-scheme-provider/ColorSchemeProvider';
import { THEME } from '../constants/theme';
import { useColorMode } from '../hooks/color';
import Sidebar from './shared/sidebar/Sidebar';
import Header from './shared/header/Header';
import './app.scss';
import CardSlider from './shared/card-slider/CardSlider';
import Section from './shared/section/Section';

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
                        <Section backgroundColor="#000" textColor="#fff">
                            Test
                        </Section>
                        <Section backgroundColor="#007fff" textColor="#fff">
                            Test
                        </Section>
                    </div>
                </div>
            </div>
        </ColorSchemeProvider>
    );
};

App.displayName = 'App';

export default App;
