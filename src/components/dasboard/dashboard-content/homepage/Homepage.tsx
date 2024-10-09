import './homepage.scss';
import StudioInformation from './studio-information/StudioInformation';

const Homepage = () => {
    return (
        <div className="homepage">
            <StudioInformation />
        </div>
    );
};

Homepage.displayName = 'Homepage';

export default Homepage;
