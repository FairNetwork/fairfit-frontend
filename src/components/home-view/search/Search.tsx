import { InputAdornment, TextField } from '@mui/material';
import './search.scss';
import React, { ChangeEvent, useState } from 'react';
import FilterButtons from './filter-buttons/FilterButtons';
import Icon from '../../shared/icon/Icon';

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
                            <Icon icon="bi-search" />
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
