import './filterButton.scss';
import { IFilterButton } from '../../../../../types/filterButton';
import { useMemo, useState } from 'react';

interface FilterButtonProps extends IFilterButton {
    onSelect: (selectedId: IFilterButton['id']) => void;
    isSelected?: boolean;
}

const FilterButton = ({ onSelect, isSelected = false, name, id }: FilterButtonProps) => {
    const [isHover, setIsHover] = useState(false);

    const opacity = useMemo(() => {
        if (isSelected) {
            return 1;
        }

        if (isHover) {
            return 0.8;
        }

        return 0.6;
    }, [isHover, isSelected]);

    return (
        <div
            className="filter-button"
            onClick={() => onSelect(id)}
            onMouseOver={() => setIsHover(true)}
            onMouseOut={() => setIsHover(false)}
            style={{ opacity }}>
            <div className="filter-button__text">{name}</div>
        </div>
    );
};

FilterButton.displayName = 'FilterButton';

export default FilterButton;
