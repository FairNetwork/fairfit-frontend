import './filterButtons.scss';
import { ReactElement, useCallback, useMemo, useState } from 'react';
import { IFilterButton } from '../../../../types/filterButton';
import FilterButton from './filter-button/FilterButton';

const BUTTONS: IFilterButton[] = [
    {
        id: '1',
        text: 'Kurse'
    },
    {
        id: '2',
        text: '24/7'
    },
    {
        id: '3',
        text: 'Solarium'
    },
    {
        id: '4',
        text: 'Trainingsapp'
    },
    {
        id: '5',
        text: 'Calisthenics'
    },
    {
        id: '6',
        text: 'E-IGym'
    }
];

const FilterButtons = () => {
    const [selectedIds, setSelectedIds] = useState<string[]>([]);

    /**
     * Function to update the selected items
     */
    const handleSelect = useCallback(
        (id: string) => {
            let newIds: string[];

            if (id === 'all') {
                newIds = selectedIds.includes('all') ? ['all'] : [];
            } else {
                newIds = selectedIds.includes(id)
                    ? selectedIds.filter((filteredId) => filteredId !== id)
                    : [...selectedIds.filter((filteredId) => filteredId !== 'all'), id];
            }

            if (newIds.length === 0) {
                newIds = ['all'];
            }

            setSelectedIds(newIds);

            // ToDo call request with filter
        },
        [selectedIds]
    );

    const buttons = useMemo(() => {
        const items: ReactElement[] = [];

        BUTTONS.forEach(({ text, id, color }) => {
            items.push(
                <FilterButton
                    key={`filter-button__${id}`}
                    text={text}
                    id={id}
                    color={color}
                    onSelect={handleSelect}
                    isSelected={selectedIds.includes(id)}
                />
            );
        });

        return items;
    }, [handleSelect, selectedIds]);

    return (
        <div className="filter-buttons">
            <div className="filter-buttons__headline">
                <div className="filter-buttons__headline__left">Filter</div>
                <div
                    className="filter-buttons__headline__right"
                    onClick={() => handleSelect('all')}>
                    zurücksetzen
                </div>
            </div>
            <div className="filter-buttons__content">{buttons}</div>
        </div>
    );
};

FilterButtons.displayName = 'FilterButtons';

export default FilterButtons;
