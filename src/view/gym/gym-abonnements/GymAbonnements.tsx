import './gymAbonnements.scss';
import CardSlider from '../../../components/shared/card-slider/CardSlider';
import { useMemo } from 'react';
import Card from '../../../components/shared/card-slider/card/Card';

const GymAbonnements = () => {
    const content = useMemo(() => {
        return (
            <>
                <Card
                    badgeText="Angebot"
                    buttonText="Auswählen"
                    containerId="card-slider"
                    aspectRatio={9 / 16}>
                    TEST
                </Card>
                <Card
                    badgeText="Angebot"
                    buttonText="Auswählen"
                    containerId="card-slider"
                    aspectRatio={9 / 16}>
                    TEST
                </Card>
                <Card buttonText="Auswählen" containerId="card-slider" aspectRatio={9 / 16}>
                    TEST
                </Card>
                <Card buttonText="Auswählen" containerId="card-slider" aspectRatio={9 / 16}>
                    TEST
                </Card>
                <Card buttonText="Auswählen" containerId="card-slider" aspectRatio={9 / 16}>
                    TEST
                </Card>
            </>
        );
    }, []);

    return (
        <div className="gym-abonnements" id="scroll-offers">
            <div className="gym-abonnements__headline">
                Entdecke unser vielfältiges Angebot und finde das perfekte Training für deine
                Fitnessziele!
            </div>
            <CardSlider>{content}</CardSlider>
        </div>
    );
};

GymAbonnements.displayName = 'GymAbonnements';

export default GymAbonnements;
