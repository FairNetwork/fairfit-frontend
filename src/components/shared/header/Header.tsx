import './header.scss';
import Search from './search/Search';

const Header = () => {
    return (
        <div className="header">
            <Search />
        </div>
    );
};

Header.displayName = 'Header';

export default Header;
