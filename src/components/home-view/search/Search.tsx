import { InputAdornment, TextField } from '@mui/material';
import './search.scss';
import React, { ChangeEvent, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import FilterButtons from './filter-buttons/FilterButtons';

const Search = () => {
    const [searchValue, setSearchValue] = useState('');

    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    };

    return (
        <div className="search">
            <TextField
                id="search"
                label="Stadt oder PLZ"
                style={{ width: '100%' }}
                onChange={handleSearchChange}
                value={searchValue}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </InputAdornment>
                    )
                }}
                variant="outlined"
            />
            <FilterButtons />
        </div>
    );
};

Search.displayName = 'Search';

export default Search;
