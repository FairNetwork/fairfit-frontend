import './gymAbonnements.scss';
import CardSlider from '../../../components/shared/card-slider/CardSlider';
import { useMemo } from 'react';
import Card from '../../../components/shared/card-slider/card/Card';
import GymCard from './gym-card/GymCard';
import { useNavigate } from 'react-router-dom';
import { useGymRoute } from '../../../hooks/gym';
import { useAppSelector } from '../../../hooks/redux';
import { selectAbonnements } from '../../../redux/gym/selectors';

const GymAbonnements = () => {
    const navigate = useNavigate();
    const gymId = useGymRoute();

    const abonnements = useAppSelector(selectAbonnements);

    const content = useMemo(() => {
        return abonnements?.map(({ id, price, isOffer, details, title }) => {
            return (
                <Card
                    key={`abonnement-${id}`}
                    badgeText="Angebot"
                    width="200px"
                    buttonText="Auswählen"
                    containerId="card-slider"
                    onButtonClick={() => navigate(`/${gymId}/offers?id=${id}`)}
                    aspectRatio={9 / 16}>
                    <GymCard title={title} price={price} details={details} />
                </Card>
            );
        });
    }, [abonnements]);

    if (!abonnements) {
        return undefined;
    }

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
