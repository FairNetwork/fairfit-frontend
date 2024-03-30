import './indicator.scss';

interface IndicatorProps {
    isSelected?: boolean;
}

const Indicator = ({ isSelected }: IndicatorProps) => {
    return (
        <div className="indicator" style={{ backgroundColor: isSelected ? 'white' : 'grey' }}></div>
    );
};

Indicator.displayName = 'Indicator';

export default Indicator;
