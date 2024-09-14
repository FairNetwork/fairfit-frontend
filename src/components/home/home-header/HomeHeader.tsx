import './homeHeader.scss';
import Header from '../../shared/header/Header';
import Search from './search/Search';
import FilterButtons from './filter-buttons/FilterButtons';

const HomeHeader = () => {
    return (
        <div className="home-header">
            <Header>
                <div className="home-header__content">
                    <h1 className="home-header__content__title">FairFit</h1>
                    <h1 className="home-header__content__slogan">
                        the fair way to fitness, compare and achieve
                    </h1>
                    <h2 className="home-header__content__headline">
                        Finde das perfekte Studio in deiner Nähe!
                    </h2>
                    <Search />
                    <FilterButtons />
                </div>
            </Header>
        </div>
    );
};

HomeHeader.displayName = 'HomeHeader';

export default HomeHeader;
