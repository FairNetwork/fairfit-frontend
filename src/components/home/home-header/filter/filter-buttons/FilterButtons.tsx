import './filterButtons.scss';
import { ReactElement, useCallback, useMemo } from 'react';
import FilterButton from './filter-button/FilterButton';
import { useAppDispatch, useAppSelector } from '../../../../../hooks/redux';
import { selectSelectedTagIds, selectTags } from '../../../../../redux/gym/selectors';
import { loadAllGyms } from '../../../../../redux/gym/actions';
import { setSelectedTags } from '../../../../../redux/gym/slice';

const FilterButtons = () => {
    const dispatch = useAppDispatch();

    const filterbuttons = useAppSelector(selectTags);
    const selectedIds = useAppSelector(selectSelectedTagIds);

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
                newIds = [];
            }

            dispatch(setSelectedTags(newIds));

            void dispatch(loadAllGyms());
        },
        [dispatch, selectedIds]
    );

    const buttons = useMemo(() => {
        const items: ReactElement[] = [];

        filterbuttons.forEach(({ name, id }) => {
            items.push(
                <FilterButton
                    key={`filter-button__${id}`}
                    name={name}
                    id={id}
                    onSelect={handleSelect}
                    isSelected={selectedIds.includes(id)}
                />
            );
        });

        return items;
    }, [filterbuttons, handleSelect, selectedIds]);

    return (
        <div className="filter-buttons">
            <div className="filter-buttons__content">{buttons}</div>
            <div className="filter-buttons__headline">
                <div
                    className="filter-buttons__headline__right"
                    onClick={() => handleSelect('all')}>
                    zurücksetzen
                </div>
            </div>
        </div>
    );
};

FilterButtons.displayName = 'FilterButtons';

export default FilterButtons;
