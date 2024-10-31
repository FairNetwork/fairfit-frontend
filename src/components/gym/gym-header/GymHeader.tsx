import './gymHeader.scss';
import Header from '../../shared/header/Header';
import { useAppSelector } from '../../../hooks/redux';
import { selectGymName } from '../../../redux/gym/selectors';

const GymHeader = () => {
    // const hasOffers = useAppSelector(selectHasOffers);
    // const gymInternalId = useAppSelector(selectCurrentGymId);
    const gymName = useAppSelector(selectGymName);

    // const navigate = useNavigate();

    return (
        <div className="gym-header">
            <Header>
                <>
                    {/*{hasOffers && (*/}
                    {/*    <div className="gym-header__offer-slider">*/}
                    {/*        <InfiniteLooper*/}
                    {/*            direction="left"*/}
                    {/*            speed={1}*/}
                    {/*            onClick={() => navigate(`/${gymInternalId}/offers`)}>*/}
                    {/*            <OfferSlider />*/}
                    {/*        </InfiniteLooper>*/}
                    {/*    </div>*/}
                    {/*)}*/}
                    <div className="gym-header__content">
                        <h1 className="gym-header__content__title">{gymName}</h1>
                    </div>
                </>
            </Header>
        </div>
    );
};

GymHeader.displayName = 'GymHeader';

export default GymHeader;
