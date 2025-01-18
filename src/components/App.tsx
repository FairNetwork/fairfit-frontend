import { useContent } from '../hooks/content';
import ColorSchemeProvider from './shared/color-scheme-provider/ColorSchemeProvider';
import { THEME } from '../constants/theme';

const App = () => {
    const content = useContent();

    return <ColorSchemeProvider colors={THEME}>Test</ColorSchemeProvider>;
};

App.displayNAme = 'App';

export default App;
