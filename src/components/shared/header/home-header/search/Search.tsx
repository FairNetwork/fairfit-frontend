import './search.scss';
import Icon from '../../../icon/Icon';

const Search = () => {
    return (
        <div className="search">
            <input type="text" placeholder="Suche" />
            <div className="search__icon">
                <Icon icon="bi bi-filter" size={20} onClick={() => {}} />
            </div>
        </div>
    );
};

Search.displayName = 'Search';

export default Search;
