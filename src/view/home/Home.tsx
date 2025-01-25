import './home.scss';
import HomeCards from './home-cards/HomeCards';

const Home = () => {
    return (
        <div className="home" id="home">
            <div className="home__headline">
                Entdecke eine vielfältige Auswahl an Fitnessangeboten ganz in deiner Nähe!
            </div>
            <HomeCards />
        </div>
    );
};

Home.displayName = 'Home';

export default Home;
