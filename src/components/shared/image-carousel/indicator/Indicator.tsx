import './indicator.scss';

interface IndicatorProps {
    isSelected?: boolean;
}

const Indicator = ({ isSelected }: IndicatorProps) => {
    return (
        <div
            className="indicator"
            style={{
                backgroundColor: isSelected ? 'var(--text-color)' : 'var(--text-color-secondary)'
            }}></div>
    );
};

Indicator.displayName = 'Indicator';

export default Indicator;
