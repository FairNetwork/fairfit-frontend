import { PricingType } from '../../../../types/pricing';
import './pricingPlan.scss';
import { usePricing } from '../../../../hooks/pricing';
import { useMemo } from 'react';
import Icon from '../../../../components/shared/icon/Icon';
import Button from '../../../../components/shared/button/Button';
import { useNavigate } from 'react-router-dom';

interface PricingPlanProps {
    type: PricingType;
}

const PricingPlan = ({ type }: PricingPlanProps) => {
    const { name, price, benefits, description } = usePricing(type);
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/sign-up?plan=${type}`);
    };

    const benefitContent = useMemo(() => {
        return Object.entries(benefits).map(([benefit, pricingTypes]) => {
            const isIncluded = pricingTypes.includes(type);

            return (
                <div
                    className="pricing-plan__benefits__item"
                    key={`pricing-benefit--${benefit}--${type}`}>
                    <div
                        className="pricing-plan__benefits__item__icon"
                        style={{
                            backgroundColor: isIncluded
                                ? 'var(--primary-color)'
                                : 'var(--secondary-color)'
                        }}>
                        <Icon
                            icon={isIncluded ? 'fas fa-check' : 'fas fa-xmark'}
                            color="white"
                            size={12}
                        />
                    </div>
                    <div className="pricing-plan__benefits__item__text">{benefit}</div>
                </div>
            );
        });
    }, [type, benefits]);

    return (
        <div className="pricing-plan">
            <h2 className="pricing-plan__name">{name}</h2>
            <h2 className="pricing-plan__price">
                {price.integerPart},
                <span className="pricing-plan__price__cents">{price.decimalPart}</span>&nbsp;€&nbsp;
                <span className="pricing-plan__price__interval">mtl.</span>
            </h2>
            <div className="pricing-plan__description">{description}</div>
            <div className="pricing-plan__benefits">{benefitContent}</div>
            <div className="pricing-plan__button">
                <Button onClick={handleClick}>Kaufen</Button>
            </div>
        </div>
    );
};

PricingPlan.displayName = 'PricingPlan';

export default PricingPlan;
