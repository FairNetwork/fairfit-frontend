import './home.scss';
import HomeCards from './home-cards/HomeCards';
import { useEffect } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { loadGyms } from '../../redux/gym/actions';
import VideoPlayer from '../../components/shared/video-player/VideoPlayer';

const Home = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        void dispatch(loadGyms());
    }, [dispatch]);

    return (
        <div className="home" id="home">
            <div className="home__headline">
                Entdecke eine vielfältige Auswahl an Fitnessangeboten ganz in deiner Nähe!
            </div>
            <VideoPlayer
                src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                ads={[
                    {
                        startTime: 15, // Die Werbung startet bei 15 Sekunden
                        src: [
                            'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4', // URL der ersten Werbevideo
                            'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4' // URL der zweiten Werbevideo
                        ]
                    },
                    {
                        startTime: 45, // Die Werbung startet bei 45 Sekunden
                        src: [
                            'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4' // URL der dritten Werbevideo
                        ]
                    }
                ]}
            />
            <HomeCards />
        </div>
    );
};

Home.displayName = 'Home';

export default Home;
