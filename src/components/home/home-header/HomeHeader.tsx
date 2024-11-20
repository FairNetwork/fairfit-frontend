import './homeHeader.scss';
import Search from './search/Search';

const HomeHeader = () => {
    return (
        <div className="home-header">
            <h2 className="home-header__headline">Finde das perfekte Studio in deiner Nähe!</h2>
            <Search />
        </div>
    );
};

HomeHeader.displayName = 'HomeHeader';

export default HomeHeader;
