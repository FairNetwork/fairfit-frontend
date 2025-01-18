import './gymAbonnements.scss';
import CardSlider from '../../../components/shared/card-slider/CardSlider';
import { useMemo } from 'react';
import Card from '../../../components/shared/card-slider/card/Card';

const GymAbonnements = () => {
    const content = useMemo(() => {
        return <Card>TEST</Card>;
    }, []);

    return (
        <div className="gym-abonnements">
            <CardSlider>{content}</CardSlider>
        </div>
    );
};

GymAbonnements.displayName = 'GymAbonnements';

export default GymAbonnements;
