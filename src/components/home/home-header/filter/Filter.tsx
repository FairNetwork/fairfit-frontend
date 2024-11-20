import './filter.scss';
import React from 'react';
import FilterButtons from './filter-buttons/FilterButtons';

const Filter = () => {
    return (
        <div className="filter">
            <h1>Filter</h1>
            <FilterButtons />
        </div>
    );
};

Filter.displayName = 'Filter';

export default Filter;
