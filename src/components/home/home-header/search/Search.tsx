import { TextField } from '@mui/material';
import './search.scss';
import React, { ChangeEvent, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { setSearchString } from '../../../../redux/gym/slice';
import { selectSearchString } from '../../../../redux/gym/selectors';
import { loadAllGyms } from '../../../../redux/gym/actions';

const Search = () => {
    const dispatch = useAppDispatch();

    const searchString = useAppSelector(selectSearchString);

    const timeout = useRef(0);

    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchString(event.target.value));

        window.clearTimeout(timeout.current);

        timeout.current = window.setTimeout(() => void dispatch(loadAllGyms()), 2000);
    };

    return (
        <div className="search">
            <TextField
                id="search"
                label="Stadt oder PLZ"
                style={{ width: '100%' }}
                onChange={handleSearchChange}
                value={searchString}
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
