import './homepage.scss';
import StudioInformation from './studio-information/StudioInformation';
import Abonnements from './abonnements/Abonnements';
import Benefits from './benefits/Benefits';
import Table from './table/Table';

const Homepage = () => {
    return (
        <div className="homepage">
            <Table />
            <StudioInformation />
            <Abonnements />
            <Benefits />
        </div>
    );
};

Homepage.displayName = 'Homepage';

export default Homepage;
