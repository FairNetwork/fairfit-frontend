import './filterButton.scss';
import { IFilterButton } from '../../../../../types/filterButton';

interface FilterButtonProps extends IFilterButton {
    onSelect: (selectedId: IFilterButton['id']) => void;
    isSelected?: boolean;
}

const FilterButton = ({ onSelect, isSelected = false, text, color, id }: FilterButtonProps) => {
    return (
        <div
            className="filter-button"
            onClick={() => onSelect(id)}
            style={{ backgroundColor: color, opacity: isSelected ? 1 : 0.6 }}>
            <div className="filter-button__text">{text}</div>
        </div>
    );
};

FilterButton.displayName = 'FilterButton';

export default FilterButton;
