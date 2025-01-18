import './header.scss';
import Search from './search/Search';
import { useHeaderContent } from '../../../hooks/header';

const Header = () => {
    const content = useHeaderContent();

    return <div className="header">{content}</div>;
};

Header.displayName = 'Header';

export default Header;
