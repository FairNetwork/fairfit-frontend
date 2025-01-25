import './gymAbonnements.scss';
import CardSlider from '../../../components/shared/card-slider/CardSlider';
import { useMemo } from 'react';
import Card from '../../../components/shared/card-slider/card/Card';
import GymCard from './gym-card/GymCard';
import { useNavigate } from 'react-router-dom';

const GymAbonnements = () => {
    const navigate = useNavigate();

    const id = 'Test';
    const gymInternalId = 'easyfitness';

    const content = useMemo(() => {
        return (
            <>
                <Card
                    badgeText="Angebot"
                    width="200px"
                    buttonText="Auswählen"
                    containerId="card-slider"
                    onButtonClick={() => navigate(`/${gymInternalId}/offers?id=${id}`)}
                    aspectRatio={9 / 16}>
                    <GymCard />
                </Card>
                <Card
                    badgeText="Angebot"
                    width="200px"
                    buttonText="Auswählen"
                    containerId="card-slider"
                    aspectRatio={9 / 16}>
                    <GymCard />
                </Card>
                <Card
                    buttonText="Auswählen"
                    containerId="card-slider"
                    width="200px"
                    aspectRatio={9 / 16}>
                    <GymCard />
                </Card>
                <Card
                    buttonText="Auswählen"
                    containerId="card-slider"
                    width="200px"
                    aspectRatio={9 / 16}>
                    <GymCard />
                </Card>
                <Card
                    buttonText="Auswählen"
                    containerId="card-slider"
                    width="200px"
                    aspectRatio={9 / 16}>
                    <GymCard />
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
