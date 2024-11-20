import { TextField } from '@mui/material';
import './search.scss';
import React, { ChangeEvent, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { setSearchString } from '../../../../redux/gym/slice';
import { selectSearchString } from '../../../../redux/gym/selectors';
import { loadAllGyms } from '../../../../redux/gym/actions';
import Icon from '../../../shared/icon/Icon';
import { Popover } from 'antd';
import Filter from '../filter/Filter';

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
                label="Suche"
                style={{ width: '100%' }}
                onChange={handleSearchChange}
                value={searchString}
                InputProps={{
                    disableUnderline: true,
                    style: { borderRadius: 100 }
                }}
                variant="filled"
            />
            <Popover trigger="click" content={<Filter />}>
                <Icon icon="bi bi-filter" size={30} onClick={() => {}} />
            </Popover>
        </div>
    );
};

Search.displayName = 'Search';

export default Search;
