import './homeCards.scss';
import { useMemo } from 'react';
import Card from '../../../components/shared/card-slider/card/Card';
import HomeCard from './home-card/HomeCard';
import { GymType } from '../../../types/gym';
import { useNavigate } from 'react-router-dom';

const HomeCards = () => {
    const navigate = useNavigate();

    const content = useMemo(() => {
        return (
            <>
                <Card
                    buttonText="Besuchen"
                    width="400px"
                    containerId="home"
                    onButtonClick={() => navigate('/easyfitness')}>
                    <HomeCard
                        name="EasyFitness"
                        type={GymType.GYM}
                        location="Ahaus"
                        image="https://images.stockcake.com/public/8/3/5/835142df-b7a9-455a-a755-36b59d68c1c2_large/intense-gym-workout-stockcake.jpg"
                    />
                </Card>
                <Card
                    buttonText="Besuchen"
                    width="400px"
                    containerId="home"
                    onButtonClick={() => navigate('/eintracht_ahaus')}>
                    <HomeCard
                        name="Eintracht Ahaus"
                        type={GymType.FOOTBALL}
                        location="Ahaus"
                        image="https://cdn.pixabay.com/photo/2016/05/16/21/07/football-1396740_1280.jpg"
                    />
                </Card>
            </>
        );
    }, []);

    return <div className="home-cards">{content}</div>;
};

HomeCards.displayName = 'HomeCards';

export default HomeCards;
