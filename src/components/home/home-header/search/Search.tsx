import { TextField } from '@mui/material';
import './search.scss';
import React, { ChangeEvent, useState } from 'react';

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
                    disableUnderline: true,
                    style: { backgroundColor: 'white', borderRadius: 100 }
                }}
                variant="filled"
            />
        </div>
    );
};

Search.displayName = 'Search';

export default Search;
