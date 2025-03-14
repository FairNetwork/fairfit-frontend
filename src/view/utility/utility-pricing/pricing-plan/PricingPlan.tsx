import { PricingType } from '../../../../types/pricing';
import './pricingPlan.scss';
import { usePricing } from '../../../../hooks/pricing';
import { ReactNode, useMemo } from 'react';
import Icon from '../../../../components/shared/icon/Icon';
import Button from '../../../../components/shared/button/Button';
import { useNavigate } from 'react-router-dom';

interface PricingPlanProps {
    type: PricingType;
}

const PricingPlan = ({ type }: PricingPlanProps) => {
    const { name, price, benefits, description, isDisabled, badgeText } = usePricing(type);
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/sign-up?plan=${type}`);
    };

    const benefitContent = useMemo(() => {
        const items: ReactNode[] = [];
        const { includes, notIncluded } = benefits;

        includes.forEach((benefit) => {
            items.push(
                <div
                    className="pricing-plan__benefits__item"
                    key={`pricing-benefit--${benefit}--${type}`}>
                    <div
                        className="pricing-plan__benefits__item__icon"
                        style={{
                            backgroundColor: 'var(--primary-color)'
                        }}>
                        <Icon icon={'fas fa-check'} color="white" size={12} />
                    </div>
                    <div className="pricing-plan__benefits__item__text">{benefit}</div>
                </div>
            );
        });

        notIncluded.forEach((benefit) => {
            items.push(
                <div
                    className="pricing-plan__benefits__item"
                    key={`pricing-benefit--${benefit}--${type}`}>
                    <div
                        className="pricing-plan__benefits__item__icon"
                        style={{
                            backgroundColor: 'var(--secondary-color)'
                        }}>
                        <Icon icon={'fas fa-xmark'} color="white" size={12} />
                    </div>
                    <div className="pricing-plan__benefits__item__text">{benefit}</div>
                </div>
            );
        });

        return items;
    }, [type, benefits]);

    return (
        <div className="pricing-plan">
            {badgeText && <div className="pricing-plan__badge">{badgeText}</div>}
            <h2 className="pricing-plan__name">{name}</h2>
            <h2 className="pricing-plan__price">
                {price.integerPart},
                <span className="pricing-plan__price__cents">{price.decimalPart}</span>&nbsp;€&nbsp;
                <span className="pricing-plan__price__interval">mtl.</span>
            </h2>
            <div className="pricing-plan__description">{description}</div>
            <div className="pricing-plan__benefits">{benefitContent}</div>
            <div className="pricing-plan__button">
                <Button onClick={handleClick} isDisabled={isDisabled}>
                    Kaufen
                </Button>
            </div>
        </div>
    );
};

PricingPlan.displayName = 'PricingPlan';

export default PricingPlan;
